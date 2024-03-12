import { Component } from '@angular/core';
import { Course, LearningType } from '../course.model';
import { CourseService } from '../course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-course-detailes',
  templateUrl: './course-detailes.component.html',
  styleUrl: './course-detailes.component.scss'
})
export class CourseDetailesComponent {
  course: Course = new Course();
  learningType = LearningType;
  category: Category;
  constructor(private _categoryService: CategoryService, private router: Router, private _acr: ActivatedRoute) {

  }
  ngOnInit() {
    this.course = new Course();
    let x = sessionStorage.getItem('course');
    let y: Course = JSON.parse(x);
    this.course = y;

    this._categoryService.getCategoriesFromServer().subscribe(d => {
      if (d)
        this.category = d.find(x => x.id == this.course.categoryId)
    })
  }
}
