import { Injectable } from '@angular/core';
import { ApiService } from '../../../@core/services';
import { map } from 'rxjs/operators';
import { CommonSimpleModel } from '../../models/common-simple.model';

@Injectable({
  providedIn: 'root'
})
export class InvestigationLinesService {

  private readonly endpoint = 'inv-line';

  constructor(
    private http: ApiService,
  ) { }
  getIdConv(groupCategoryId: string) {
    return this.http.get(`${this.endpoint}/getIdConv/${groupCategoryId}`, null, true)
      .pipe(
        map((res: any) => {
          return res.invLines || null;
        }),
      );
  }
  add(invLine: Partial<CommonSimpleModel>) {
    return this.http.post(`${this.endpoint}`, invLine)
      .pipe(
        map((res: any) => {
          return res.invLine || null;
        }),
      );
  }

  getById(invLineId: string) {
    return this.http.get(`${this.endpoint}/${invLineId}`, null, true)
      .pipe(
        map((res: any) => {
          return res.invLine || null;
        }),
      );
  }

  getAll() {
    return this.http.get(`${this.endpoint}`, null, true)
      .pipe(
        map((res: any) => {
          return res.invLines || null;
        }),
      );
  }

  update(invLineId: string, invLine: Partial<CommonSimpleModel>) {
    return this.http.patch(`${this.endpoint}/${invLineId}`, invLine, null, true)
      .pipe(
        map((res: any) => {
          return res.invLine || null;
        }),
      );
  }

  delete(invLineId: string) {
    return this.http.delete(`${this.endpoint}/${invLineId}`, null, true)
      .pipe(
        map((res: any) => {
          return res.invLine || null;
        }),
      );
  }
}
