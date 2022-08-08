import { Injectable } from '@angular/core';
import { ApiService } from '../../../@core/services';
import { map } from 'rxjs/operators';
import { CommonSimpleModel } from '../../models/common-simple.model';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {

  private readonly endpoint = 'product-type';

  constructor(
    private http: ApiService,
  ) { }

  getIdConv(groupCategoryId: string) {
    return this.http.get(`${this.endpoint}/getIdConv/${groupCategoryId}`, null, true)
      .pipe(
        map((res: any) => {
          return res.productTypes || null;
        }),
      );
  }
  add(productType: Partial<CommonSimpleModel>) {
    return this.http.post(`${this.endpoint}`, productType)
      .pipe(
        map((res: any) => {
          return res.productType || null;
        }),
      );
  }

  getById(productTypeId: string) {
    return this.http.get(`${this.endpoint}/${productTypeId}`, null, true)
      .pipe(
        map((res: any) => {
          return res.productType || null;
        }),
      );
  }

  getAll() {
    return this.http.get(`${this.endpoint}`, null, true)
      .pipe(
        map((res: any) => {
          return res.productTypes || null;
        }),
      );
  }

  update(productTypeId: string, productType: Partial<CommonSimpleModel>) {
    return this.http.patch(`${this.endpoint}/${productTypeId}`, productType, null, true)
      .pipe(
        map((res: any) => {
          return res.productType || null;
        }),
      );
  }

  delete(productTypeId: string) {
    return this.http.delete(`${this.endpoint}/${productTypeId}`, null, true)
      .pipe(
        map((res: any) => {
          return res.productType || null;
        }),
      );
  }
}
