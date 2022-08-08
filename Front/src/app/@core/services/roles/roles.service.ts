import { Injectable } from '@angular/core';
import { Rol } from '../../old-models/rol';
import { ApiService } from '../../services/index';
import { RoleModel } from '../../../../app/shared/models/role.model';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, take, tap } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private readonly endpoint = 'role';

  constructor(
    private http: ApiService,
  ) { }

  add(role: Partial<RoleModel>) {
    return this.http.post(`${this.endpoint}`, role)
      .pipe(
        map((res: HttpResponse<RoleModel[]>) => {
          return res['role'] || null;
        }),
      );
  }

  getAll() {
    return this.http.get(`${this.endpoint}`, null, true)
      .pipe(
        map((res: HttpResponse<RoleModel[]>) => {
          return res['roles'] || null;
        }),
      );
  }

  getById(roleId: string) {
    return this.http.get(`${this.endpoint}/${roleId}`, null, true)
      .pipe(
        map((res: any) => {
          return res['role'] || null;
        }),
      );
  }

  update(roleId: string, role: Partial<RoleModel>) {
    return this.http.patch(`${this.endpoint}/${roleId}`, role, null, true)
      .pipe(
        map((res: HttpResponse<RoleModel[]>) => {
          return res['role'] || null;
        }),
      );
  }

  delete(roleId: string) {
    return this.http.delete(`${this.endpoint}/${roleId}`, null, true)
      .pipe(
        map((res: HttpResponse<RoleModel[]>) => {
          return res['role'] || null;
        }),
      );
  }

  getDefaultRole() {
    return this.http.get(`${this.endpoint}/getDefaultRole`)
      .pipe(
        map((res: HttpResponse<RoleModel[]>) => {
          return res['role'] || null;
        }),
      );
  }

  getCommanderRoleId(): Observable<string> {
    return this.getAll()
      .pipe(
        map((roles: RoleModel[]) => roles.find(r => r.name === 'Comandante')._id),
        take(1),
        catchError(() => of(''))
      )
  }
}
