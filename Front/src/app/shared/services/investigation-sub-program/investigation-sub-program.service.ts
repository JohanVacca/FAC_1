import { Injectable } from '@angular/core';
import { ApiService } from '../../../@core/services';
import { CommonSimpleModel } from '../../models/common-simple.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvestigationSubProgramService {

  private readonly endpoint = 'inv-sub-program';

  constructor(
    private http: ApiService,
  ) { }

  getIdConv(groupCategoryId: string) {
    return this.http.get(`${this.endpoint}/getIdConv/${groupCategoryId}`, null, true)
      .pipe(
        map((res: any) => {
          return res.invSubPrograms || null;
        }),
      );
  }
  add(invSubProgram: Partial<CommonSimpleModel>) {
    return this.http.post(`${this.endpoint}`, invSubProgram)
      .pipe(
        map((res: any) => {
          return res.invSubPrograms || null;
        }),
      );
  }

  getById(invSubProgramId: string) {
    return this.http.get(`${this.endpoint}/${invSubProgramId}`, null, true)
      .pipe(
        map((res: any) => {
          return res.invSubProgram || null;
        }),
      );
  }

  getAll() {
    return this.http.get(`${this.endpoint}`, null, true)
      .pipe(
        map((res: any) => {
          return res.invSubPrograms || null;
        }),
      );
  }

  update(invSubProgramId: string, invSubProgram: Partial<CommonSimpleModel>) {
    return this.http.patch(`${this.endpoint}/${invSubProgramId}`, invSubProgram, null, true)
      .pipe(
        map((res: any) => {
          return res.invSubProgram || null;
        }),
      );
  }

  delete(invSubProgramId: string) {
    return this.http.delete(`${this.endpoint}/${invSubProgramId}`, null, true)
      .pipe(
        map((res: any) => {
          return res.invSubProgram || null;
        }),
      );
  }
}
