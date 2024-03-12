import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  hide: boolean = true;
  constructor(private _userService: UserService, private router: Router) {
    this.user = new User();
    let x = sessionStorage.getItem('user');
    console.log("x:" + x)
    if (x != null) {
      console.log("x2:", x)
      let y: User = JSON.parse(x);
      console.log(y);
      this.user.fullName = y.fullName;
      this.user.password = y.password;
      this.user = this.user;
    }
  }

  ngOnInit(): void {

    // if (sessionStorage.getItem('user') != null){
    //   let x = sessionStorage.getItem('user');

    // }
  }
  registerForm!: FormGroup;
  private _user: User = new User();
  public get user(): User {
    return this._user;
  }
  @Input()
  public set user(value: User) {
    this._user = value;
    if (this.user != undefined) {
      this.registerForm = new FormGroup({
        fullName: new FormControl(this.user.fullName, [Validators.required, Validators.minLength(3)]),
        password: new FormControl(this.user.password, [Validators.required, Validators.minLength(3)]),
        email: new FormControl(this.user.email, [Validators.email, Validators.required]),
        address: new FormControl(this.user.address, [Validators.required]),
        id: new FormControl(this.user.id, []),
        lecturer: new FormControl(this.user.isLecturer, []),
        courseName: new FormControl(this.user.courseName, [])
      });
    }
  }
  registerUser() {
    console.log("xdfghjk");
    this.user = this.registerForm.value;
    console.log("nnnnnnn", this.lecturer)
    if (this.lecturer)
      this.user.isLecturer = true;
    else
      this.user.isLecturer = false;
    console.log("vgbhnjmk,l");
    console.log(this.user)
    this._userService.getUsersFromServer().subscribe(data => {
      let currentUser = data.find(d => d.fullName == this.user.fullName);
      console.log(currentUser)
      if (currentUser != undefined) {
        console.log(currentUser)
        alert("you exist!")
        sessionStorage.setItem("user", JSON.stringify(this.user))
        this.router.navigate(['/course/allCourses', { user: this.user }])
      }
      else {
        console.log("fffffff");
        console.log(this.user)
        this._userService.setNewUserInServer(this.user).subscribe(data => console.log("hi!"));
        sessionStorage.setItem("user", JSON.stringify(this.user))
        this.router.navigate(['/course/allCourses', { user: this.user }]);
      }
    })
  }
  lecturer: boolean = false;
  lecturerRegister() {
    this.lecturer = true;
  } z
}