import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthStorageService } from '../storage';
import { AuthService } from '../auth/auth.service';
import { Roles } from '../../enums/roles.enum';

@Injectable({
  providedIn: 'root',
})
export class RoleGuardService implements CanActivate {

  roles = Roles;
  constructor(
    private authStorageService: AuthStorageService,
    private authService: AuthService,
    private router: Router) {
  }

  canActivate(): boolean {
    const role = this.authStorageService.getRole();
    let pass = false;
    if (role !== undefined) {
      if (role === Roles.Admin) {
        pass = true;
      } else {
        this.router.navigate(['/pages']);
      }
    } else {
      this.authService.getUserRoleByToken()
        .subscribe(
          () => this.canActivate(),
          (err) => this.router.navigate(['home/sign-in'])
        );
    }
    return pass;
  }
}
