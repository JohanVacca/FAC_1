import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    public auth: AuthService,
    public router: Router) {
  }

  canActivate(): boolean {
    const hayToken = localStorage.getItem("token");
    const isAuthenticated = this.auth.isAuthenticated();
    let pass = false;
    if (hayToken != undefined && hayToken != null) {
      pass = true;
    } else {
      this.router.navigate(['home/sign-in']);
    }
    return pass;
  }
}
