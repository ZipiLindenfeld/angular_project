import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AddCourseComponent } from "./add-course/add-course.component";
import { CourseDetailesComponent } from "./course-detailes/course-detailes.component";
import { AllCoursesComponent } from "./all-courses/all-courses.component";
import { CourseService } from "./course.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientJsonpModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { CourseRoutingModule } from "./course-routing.module";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatOptionModule } from "@angular/material/core";
import { MatRadioModule } from '@angular/material/radio';
import { CategoryService } from "./category.service";
import { LearningTypeIconPipe } from "./all-courses/course.pipe";

@NgModule({
    declarations: [AllCoursesComponent, AddCourseComponent, CourseDetailesComponent, LearningTypeIconPipe],
    imports: [FormsModule, ReactiveFormsModule, HttpClientJsonpModule, CommonModule, RouterModule, CourseRoutingModule, MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatLabel, MatRadioModule],
    providers: [CourseService, CategoryService],
    exports: [RouterModule]
})

export class CourseModule {

}

