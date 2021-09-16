import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate() {
    // console.log('AuthGuard#canActivate called')
    const token = window.localStorage.getItem('auth_token')
    if (!token) {
      this.router.navigate(['/signin'])
      return false
    }
    return true
  }
}