import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "./course.model";
import { HttpClient } from "@angular/common/http";
import { Lecturer } from "./lecturer.model";
import { Category } from "./category.model";
import { User } from "../user/user.model";





@Injectable()
export class CourseService {

    constructor(private _http: HttpClient) {

    }
    getCoursesFromServer(): Observable<Course[]> {
        return this._http.get<Course[]>(`/api/Course`);
    }
    getCategoriesFromServer(): Observable<Category[]> {
        return this._http.get<Category[]>(`api/Category`);
    }
    getLecturerFromServerByName(name: string): Observable<User> {
        return this._http.get<User>(`api/User/${name}`);
    }
    setNewCourseToServer(course: Course) {
        return this._http.post(`api/Course`, course);
    }
    deleteCourse(id: number): Observable<boolean> {
        return this._http.delete<boolean>(`api/Course/${id}`);
    }
}