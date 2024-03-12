import { Component, OnDestroy } from '@angular/core';
import { Course, LearningType } from '../course.model';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../category.model';
import { User } from '../../user/user.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.scss'
})
export class AddCourseComponent implements OnDestroy {
  course!: Course;
  courseForm!: FormGroup;
  categories: Category[] = [];
  constructor(private _courseService: CourseService, private router: Router) {
    let x = sessionStorage.getItem('course');
    if (x != null) {
      let y: Course = JSON.parse(x);
      this.course = y;
      this.course.syllabus = y.syllabus;
      this.inputArray = y.syllabus;
      console.log("aaat", this.course)
      this.inputArray.push("");
    }
    else
      this.course = new Course();
    if (this.course != undefined) {
      this.courseForm = new FormGroup({
        id: new FormControl(this.course.id, []),
        name: new FormControl(this.course.name, [Validators.required]),
        description: new FormControl(this.course.description, []),
        categoryId: new FormControl(this.course.categoryId, [Validators.required]),
        countLessons: new FormControl(this.course.countLessons, [Validators.required]),
        startDate: new FormControl(this.course.startDate, [Validators.required]),
        // syllabus: new FormControl(this.inputArray, []),
        learningType: new FormControl(this.course.learningType?.toString(), [Validators.required]),
        lecturerId: new FormControl(this.course.lecturerId, []),
        img: new FormControl(this.course.img, [Validators.required])
      });

    }

  }
  inputArray: string[] = [""];
  inputArrayControls: FormControl[] = [];
  changes: boolean[] = [false, false];
  addInput(control: FormControl, i: number) {
    i++;

    if (this.changes[i] && this.inputArray[i] !== control.value) {
      // If the value at index i changed
      this.inputArray[i] = control.value;

      if (this.inputArray[i] === "") {
        control.setValue(this.inputArray[i + 1]);

        for (let j = i; j < this.inputArray.length - 1; j++) {
          this.inputArray[j] = this.inputArray[j + 1];
          this.inputArrayControls[j] = this.inputArrayControls[j + 1];
        }

        this.inputArray.pop();
        this.inputArrayControls[this.inputArrayControls.length - 1] = new FormControl('')
        // this.inputArrayControls.pop();
      }

      console.log("Value changed and updated");
    } else if (this.changes.length > i && !this.changes[i]) {
      // Add new input to the next field
      this.inputArray.push(control.value);
      this.changes.push(false);
      this.inputArrayControls.push(new FormControl(''));

      console.log("New input added");
    }

    console.log("The updated array:", this.inputArray);
    this.changes[i] = true;
  }
  ngOnDestroy(): void {
    sessionStorage.removeItem('course');
  }
  ngOnInit(): void {
    this._courseService.getCategoriesFromServer().subscribe(data => {
      this.categories = data;
      console.log(this.categories)
    })
    this.inputArrayControls = this.inputArray.map(input => new FormControl(input));
  }
  saveNewCourse() {
    console.log(this.courseForm)
    this.courseForm.value.id = this.course.id;
    this.course = this.courseForm.value;
    this.inputArray.shift()
    this.course.syllabus = this.inputArray;
    this.course.learningType = +this.course.learningType;
    this.course.description = "";
    let x = sessionStorage.getItem('user');
    if (x != null) {
      let y: User = JSON.parse(x);
      this.course.lecturerId = y.id;
    }
    this.course.id = 0;
    this.course.categoryId = +this.course.categoryId
    console.log(this.course)
    this._courseService.setNewCourseToServer(this.course).subscribe(data => {
      Swal.fire({
        title: `Well done!!! `,
        text: "The course was successfully added!",
        icon: "success"
      });
      console.log("added successfully!!!!");
      this.router.navigate(["course/allCourses"]);
    })
    console.log(this.course)
  }
  cancel() {
    this.router.navigate(["course/allCourses"]);
  }

}