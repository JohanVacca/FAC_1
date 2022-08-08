import { Injectable } from '@angular/core';
import { ApiService } from '../../../@core/services';
import { CommonSimpleModel } from '../../models/common-simple.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvTeamPersonPositionService {

  private readonly endpoint = 'inv-team-person-position';

  constructor(
    private http: ApiService,
  ) { }

  getIdConv(groupCategoryId: string) {
    return this.http.get(`${this.endpoint}/getIdConv/${groupCategoryId}`, null, true)
      .pipe(
        map((res: any) => {
          return res.invTeamPersonPositions || null;
        }),
      );
  }
  add(InvTeamPersonPosition: Partial<CommonSimpleModel>) {
    return this.http.post(`${this.endpoint}`, InvTeamPersonPosition)
      .pipe(
        map((res: any) => {
          return res.InvTeamPersonPosition || null;
        }),
      );
  }

  getById(InvTeamPersonPositionId: string) {
    return this.http.get(`${this.endpoint}/${InvTeamPersonPositionId}`, null, true)
      .pipe(
        map((res: any) => {
          return res.InvTeamPersonPositions || null;
        }),
      );
  }

  getAll() {
    return this.http.get(`${this.endpoint}`, null, true)
      .pipe(
        map((res: any) => {
          return res.invTeamPersonPositions || null;
        }),
      );
  }

  update(InvTeamPersonPositionId: string, InvTeamPersonPosition: Partial<CommonSimpleModel>) {
    return this.http.patch(`${this.endpoint}/${InvTeamPersonPositionId}`, InvTeamPersonPosition, null, true)
      .pipe(
        map((res: any) => {
          return res.InvTeamPersonPosition || null;
        }),
      );
  }

  delete(InvTeamPersonPositionId: string) {
    return this.http.delete(`${this.endpoint}/${InvTeamPersonPositionId}`, null, true)
      .pipe(
        map((res: any) => {
          return res.InvTeamPersonPosition || null;
        }),
      );
  }
}
