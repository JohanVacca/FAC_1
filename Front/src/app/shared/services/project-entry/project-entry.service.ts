import { Injectable } from '@angular/core';
import { ApiService } from '../../../@core/services';
import { map } from 'rxjs/operators';
import { CommonSimpleModel } from '../../models/common-simple.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectEntryService {

  private readonly endpoint = 'project-entry';

  constructor(
    private http: ApiService,
  ) { }
  getIdConv(groupCategoryId: string) {
    return this.http.get(`${this.endpoint}/getIdConv/${groupCategoryId}`, null, true)
      .pipe(
        map((res: any) => {
          return res.projectEntrys || null;
        }),
      );
  }
  add(projectEntry: Partial<CommonSimpleModel>) {
    return this.http.post(`${this.endpoint}`, projectEntry)
      .pipe(
        map((res: any) => {
          return res.projectEntry || null;
        }),
      );
  }

  getById(projectEntryId: string) {
    return this.http.get(`${this.endpoint}/${projectEntryId}`, null, true)
      .pipe(
        map((res: any) => {
          return res.projectEntry || null;
        }),
      );
  }

  getAll() {
    return this.http.get(`${this.endpoint}`, null, true)
      .pipe(
        map((res: any) => {
          return res.projectEntries || null;
        }),
      );
  }

  update(projectEntryId: string, projectEntry: Partial<CommonSimpleModel>) {
    return this.http.patch(`${this.endpoint}/${projectEntryId}`, projectEntry, null, true)
      .pipe(
        map((res: any) => {
          return res.projectEntry || null;
        }),
      );
  }

  delete(projectEntryId: string) {
    return this.http.delete(`${this.endpoint}/${projectEntryId}`, null, true)
      .pipe(
        map((res: any) => {
          return res.projectEntry || null;
        }),
      );
  }
}
