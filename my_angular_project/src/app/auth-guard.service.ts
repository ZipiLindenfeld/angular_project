import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  someConditin: boolean = false;

  canActivate(): boolean {
    if (this.someConditin) {
      this.someConditin = false;
      return true;
    }
    alert("you mustn't enter this route!");
    this.someConditin = true;
    return false;
  }

  constructor() { }
}
