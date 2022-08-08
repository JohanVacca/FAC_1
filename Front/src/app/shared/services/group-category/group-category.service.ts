import { Injectable } from '@angular/core';
import { ApiService } from '../../../@core/services';
import { CommonSimpleModel } from '../../models/common-simple.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GroupCategoryService {

  private readonly endpoint = 'group-category';

  constructor(
    private http: ApiService,
  ) { }

  add(groupCategory: Partial<CommonSimpleModel>) {
    return this.http.post(`${this.endpoint}`, groupCategory)
      .pipe(
        map((res: any) => {
          return res.groupCategory || null;
        }),
      );
  }

  getIdConv(groupCategoryId: string) {
    return this.http.get(`${this.endpoint}/getIdConv/${groupCategoryId}`, null, true)
      .pipe(
        map((res: any) => {
          return res.groupCategories || null;
        }),
      );
  }

  getById(groupCategoryId: string) {
    return this.http.get(`${this.endpoint}/${groupCategoryId}`, null, true)
      .pipe(
        map((res: any) => {
          return res.groupCategory || null;
        }),
      );
  }

  getAll() {
    return this.http.get(`${this.endpoint}`, null, true)
      .pipe(
        map((res: any) => {
          return res.groupCategories || null;
        }),
      );
  }

  update(groupCategoryId: string, groupCategory: Partial<CommonSimpleModel>) {
    return this.http.patch(`${this.endpoint}/${groupCategoryId}`, groupCategory, null, true)
      .pipe(
        map((res: any) => {
          return res.groupCategory || null;
        }),
      );
  }

  delete(groupCategoryId: string) {
    return this.http.delete(`${this.endpoint}/${groupCategoryId}`, null, true)
      .pipe(
        map((res: any) => {
          return res.groupCategory || null;
        }),
      );
  }
}
