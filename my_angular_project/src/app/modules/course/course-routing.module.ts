import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AddCourseComponent } from "./add-course/add-course.component";
import { CourseDetailesComponent } from "./course-detailes/course-detailes.component";
import { AllCoursesComponent } from "./all-courses/all-courses.component";

const APP_ROUTES: Route[] = [
    { path: "allCourses", component: AllCoursesComponent },
    { path: "courseDetailes", component: CourseDetailesComponent },
    { path: "addCourse", component: AddCourseComponent },
    { path: "editCourse", component: AddCourseComponent }
]

@NgModule({
    imports: [RouterModule.forChild(APP_ROUTES)],
    exports: [RouterModule]
})

export class CourseRoutingModule {

}