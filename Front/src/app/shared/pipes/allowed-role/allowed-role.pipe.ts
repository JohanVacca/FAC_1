import { Pipe, PipeTransform } from '@angular/core';
import { AuthService } from '../../../@core/services/auth/auth.service';
import { iif, Observable, of } from 'rxjs';
import { flatMap, tap } from 'rxjs/operators';

@Pipe({
  name: 'allowedRole'
})
export class AllowedRolePipe implements PipeTransform {

  constructor(private authService: AuthService) {
  }

  transform(roles: string[]): Observable<boolean> {
    return this.authService.getUserRoleId()
      .pipe(
        flatMap(roleId =>
          iif(() => roleId !== undefined,
            of(this.allowed(roles, roleId)),
            of(false)),
        ),
      );
  }

  allowed = (roles: string[], userRoleId: string) => !!roles.find(r => r === userRoleId);
}
