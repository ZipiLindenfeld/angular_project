import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Router } from "@angular/router";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = true;
  constructor(private _userService: UserService, private router: Router) {
    this.user = new User();
  }

  ngOnInit(): void {
    this.user = new User();
  }
  loginForm!: FormGroup;
  private _user: User = new User();
  public get user(): User {
    return this._user;
  }

  @Input()
  public set user(value: User) {
    this._user = value;
    if (this.user != undefined) {
      this.loginForm = new FormGroup({
        fullName: new FormControl(this.user.fullName, [Validators.required, Validators.minLength(3)]),
        password: new FormControl(this.user.password, [Validators.required, Validators.minLength(3)]),
      });
    }
  }
  loginUser() {
    this.user = this.loginForm.value;
    console.log(this.user);
    this._userService.getUsersFromServer().subscribe(data => {
      let currentUser = data.find(d => d.fullName == this.user.fullName);
      if (currentUser != undefined) {
        if (currentUser.password != this.user.password)
          alert("wrong password!");
        else {
          alert("you succeeded!");
          console.log(currentUser)
          sessionStorage.setItem("user", JSON.stringify(currentUser))
          this.router.navigate(['/course/allCourses', { user: this.user }])
        }
      }
      else {
        sessionStorage.setItem("user", JSON.stringify(this.user))
        this.router.navigate(['/user/register', { user: this.user }])
      }
    })
  }
}
