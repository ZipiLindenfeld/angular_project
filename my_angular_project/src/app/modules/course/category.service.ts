import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "./category.model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CategoryService {
    constructor(private _http: HttpClient) {

    }
    getCategoriesFromServer(): Observable<Category[]> {
        return this._http.get<Category[]>(`api/Category`);
    }
}