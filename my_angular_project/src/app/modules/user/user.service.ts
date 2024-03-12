import { Injectable } from "@angular/core"
import { User } from "./user.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class UserService {
    getUserFromServerByName(name: string | undefined): Observable<User> {
        // return this._http.get<User>(`/api/User/${name}`);
        this.getUsersFromServer().subscribe(data => {
            return data.find(u => u.fullName == name);
        })
        return new Observable<User>;
    }
    getUsersFromServer(): Observable<User[]> {
        return this._http.get<User[]>(`/api/User`);
    }
    setNewUserInServer(user: User) {
        user.id = 0;
        console.log("ininin")
        console.log(user)
        return this._http.post(`/api/User`, user);
    }
    constructor(private _http: HttpClient) {

    }
}