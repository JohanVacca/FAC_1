import { Injectable } from '@angular/core';
import { ApiService } from '../../../@core/services';
import { CommonSimpleModel } from '../../models/common-simple.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvestigationTypesService {

  private readonly endpoint = 'inv-type';

  constructor(
    private http: ApiService,
  ) { }

  getIdConv(groupCategoryId: string) {
    return this.http.get(`${this.endpoint}/getIdConv/${groupCategoryId}`, null, true)
      .pipe(
        map((res: any) => {
          return res.invTypes || null;
        }),
      );
  }
  add(invType: Partial<CommonSimpleModel>) {
    return this.http.post(`${this.endpoint}`, invType)
      .pipe(
        map((res: any) => {
          return res.invType || null;
        }),
      );
  }

  getById(invTypeId: string) {
    return this.http.get(`${this.endpoint}/${invTypeId}`, null, true)
      .pipe(
        map((res: any) => {
          return res.invType || null;
        }),
      );
  }

  getAll() {
    return this.http.get(`${this.endpoint}`, null, true)
      .pipe(
        map((res: any) => {
          return res.invTypes || null;
        }),
      );
  }

  update(invTypeId: string, invType: Partial<CommonSimpleModel>) {
    return this.http.patch(`${this.endpoint}/${invTypeId}`, invType, null, true)
      .pipe(
        map((res: any) => {
          return res.invType || null;
        }),
      );
  }

  delete(invTypeId: string) {
    return this.http.delete(`${this.endpoint}/${invTypeId}`, null, true)
      .pipe(
        map((res: any) => {
          return res.invType || null;
        }),
      );
  }
}
