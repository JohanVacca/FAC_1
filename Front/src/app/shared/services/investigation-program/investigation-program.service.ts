import { Injectable } from '@angular/core';
import { ApiService } from '../../../@core/services';
import { CommonSimpleModel } from '../../models/common-simple.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvestigationProgramService {

  private readonly endpoint = 'inv-program'; 

  constructor(
    private http: ApiService,
  ) { }

  getIdConv(groupCategoryId: string) {
    return this.http.get(`${this.endpoint}/getIdConv/${groupCategoryId}`, null, true)
      .pipe(
        map((res: any) => {
          return res.invPrograms || null;
        }),
      );
  }
  add(invProgram: Partial<CommonSimpleModel>) {
    return this.http.post(`${this.endpoint}`, invProgram)
      .pipe(
        map((res: any) => {
          return res.invProgram || null;
        }),
      );
  }

  getById(invProgramId: string) {
    return this.http.get(`${this.endpoint}/${invProgramId}`, null, true)
      .pipe(
        map((res: any) => {
          return res.invProgram || null;
        }),
      );
  }

  getAll() {
    return this.http.get(`${this.endpoint}`, null, true)
      .pipe(
        map((res: any) => {
          return res.invPrograms || null;
        }),
      );
  }

  update(invProgramId: string, invProgram: Partial<CommonSimpleModel>) {
    return this.http.patch(`${this.endpoint}/${invProgramId}`, invProgram, null, true)
      .pipe(
        map((res: any) => {
          return res.invProgram || null;
        }),
      );
  }

  delete(invProgramId: string) {
    return this.http.delete(`${this.endpoint}/${invProgramId}`, null, true)
      .pipe(
        map((res: any) => {
          return res.invProgram || null;
        }),
      );
  }
}
