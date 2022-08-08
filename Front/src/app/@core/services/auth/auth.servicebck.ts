import { Injectable } from '@angular/core';
import { Roles } from '../../enums/roles.enum';
import { ApiService, AuthStorageService } from '..';
import { UserModel } from '../../../shared/models/user.model';
import { flatMap, map, tap } from 'rxjs/operators';
import { RoleModel } from '../../../shared/models/role.model';
import { iif, Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private readonly endpoint = 'auth';

  constructor(
    private http: ApiService,
    private router: Router,
    private authStorageService: AuthStorageService,
  ) { }

  signIn(email: string, password: string) {
    const body = {
      email,
      password,
    };

    return this.http.post(`${this.endpoint}/login`, body)
        .pipe(
            map((res) => {
              this.saveUserInfo(res);
            }),
        );
  }

  signUp(user: Partial<UserModel>) {
    const body = user;

    return this.http.post(`${this.endpoint}/register`, body);
  }

  getUserRoleByToken(): Observable<RoleModel> {
    return this.getUserByToken()
      .pipe(
        map((user) => user.role as RoleModel),
      );
  }

  getUserByToken(): Observable<Partial<UserModel>> {
    const token = this.authStorageService.getToken();
    if (token) {
      return this.http.get(`${this.endpoint}/getRole`, null, true)
        .pipe(
          tap(({user}) => this.saveUserData(user)),
          map(({user}) => user),
        );
    } else {
      return throwError('Token does not exists');
    }
  }

  isAuthenticated(): boolean {
    const userId = this.getUserId();
    if (!userId) {
      this.getUserRoleByToken()
        .subscribe(
          () => this.isAuthenticated(),
          (err) => this.authStorageService.clean()
        );
    }
    return !!this.authStorageService.getToken();
  }

  signOut() {
    this.authStorageService.clean();
    window.location.reload();
  }

  getUserId(): Observable<string> {
    return of(this.authStorageService.getUserId())
      .pipe(
        flatMap(userId =>
          iif(() => userId === undefined,
            this.getUserByToken().pipe(map(user => user._id)),
            of(userId)),
        ),
      );
  }

  getUserRoleName(): Observable<Roles> {
    return of(this.authStorageService.getRole())
      .pipe(
        flatMap(role =>
            iif(() => role === undefined,
              this.getUserRoleByToken().pipe(map(role => role.name as Roles)),
              of(role)),
          ),
      );
  }

  getUserRoleId(): Observable<string> {
    return of(this.authStorageService.roleId)
      .pipe(
        flatMap(roleId =>
          iif(() => roleId === undefined,
            this.getUserRoleByToken().pipe(map(role => role._id)),
            of(roleId)),
        ),
      );
  }

  private saveUserInfo(res: any) {
    if (res.token) {
      this.saveToken(res.token);
    }

    if (res.user) {
      this.saveUserData(res.user);
    }
  }

  private saveToken(token: string) {
    this.authStorageService.setToken(token);
  }

  private saveUserData(user: UserModel) {
    if (user._id) {
      this.authStorageService.setUserId(user._id);
    }

    if (user.role) {
      const role = <RoleModel>user.role;
      this.authStorageService.setRole(role.name as Roles);
      this.authStorageService.roleId = role._id;
    }

    if (user.profile) {
      this.authStorageService.setFullName(`${user.profile.names} ${user.profile.surname}`);
    }
  }

}
