import { Component, OnDestroy, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { CourseService } from '../course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { Category } from '../category.model';
import Swal from 'sweetalert2';
import { User } from '../../user/user.model';

@Component({
  selector: 'app-all-courses',
  // standalone: true,
  // imports: [],
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.scss'
})
export class AllCoursesComponent implements OnInit {
  courses: Course[];
  allCourses: Course[];
  categories: Category[] = [];
  currentDate = new Date();
  nextWeekDateString = new Date(this.currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
  nextWeekDate = new Date(this.nextWeekDateString);
  user: User = new User();
  getCssClass(course) {
    const dateString = course.startDate;
    const parts = dateString.split('-');
    const dateObject = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
    console.log("a", dateObject, "b", this.nextWeekDate);
    return dateObject < this.nextWeekDateString ? 'date' : null;
  }
  constructor(private _courseService: CourseService, private _categoryService: CategoryService, private _router: Router) {
  }
  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    console.log(this.user)
    this._courseService.getCoursesFromServer().subscribe(data => {
      this.courses = data
      this.allCourses = this.courses;
    })
    this._categoryService.getCategoriesFromServer().subscribe(d => {
      this.categories = d
    })
  }

  showDetailes(c: Course) {
    sessionStorage.setItem('course', JSON.stringify(c))
    if (this.user && this.user.id != -1)
      this._router.navigate(["/course/courseDetailes"])
    else {
      alert("you have to log in")
      this._router.navigate(["/user/login"])

    }
  }
  editCourse(c: Course) {
    sessionStorage.setItem("course", JSON.stringify(c))
    this._router.navigate(["course/addCourse"])
  }
  deleteCourse(id: number) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete!"
    }).then((result) => {
      if (result.isConfirmed) {
        this._courseService.deleteCourse(id).subscribe(d => {
          if (d)
            Swal.fire({
              title: "deleted!",
              text: "The Course Deleted successfully!!!",
              icon: "success"
            })
        })
      }
    });
  }
  selectedCategory = -1;
  selectedLearningType = -1;
  selectedName = "";
  change() {
    this.courses = this.allCourses.filter(c => (this.selectedCategory == -1 || c.categoryId == this.selectedCategory) &&
      (this.selectedLearningType == -1 || c.learningType == this.selectedLearningType) &&
      c.name.includes(this.selectedName))
  }
}