import { Injectable } from '@angular/core';
import { ApiService } from '../../../@core/services';
import { CommonSimpleModel } from '../../models/common-simple.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvEndorsersService {

  private readonly endpoint = 'inv-endorser';

  constructor(
    private http: ApiService,
  ) { }

  getIdConv(groupCategoryId: string) {
    return this.http.get(`${this.endpoint}/getIdConv/${groupCategoryId}`, null, true)
      .pipe(
        map((res: any) => {
         return res.invEndorsers || null;
        }),
      );
  }
  add(invEndorser: Partial<CommonSimpleModel>) {
    return this.http.post(`${this.endpoint}`, invEndorser)
      .pipe(
        map((res: any) => {
          return res.invEndorser || null;
        }),
      );
  }

  getById(invEndorserId: string) {
    return this.http.get(`${this.endpoint}/${invEndorserId}`, null, true)
      .pipe(
        map((res: any) => {
          return res.invEndorser || null;
        }),
      );
  }

  getAll() {
    return this.http.get(`${this.endpoint}`, null, true)
      .pipe(
        map((res: any) => {
          return res.invEndorsers || null;
        }),
      );
  }

  update(invEndorserId: string, invEndorser: Partial<CommonSimpleModel>) {
    return this.http.patch(`${this.endpoint}/${invEndorserId}`, invEndorser, null, true)
      .pipe(
        map((res: any) => {
          return res.invEndorser || null;
        }),
      );
  }

  delete(invEndorserId: string) {
    return this.http.delete(`${this.endpoint}/${invEndorserId}`, null, true)
      .pipe(
        map((res: any) => {
          return res.invEndorser || null;
        }),
      );
  }
}
