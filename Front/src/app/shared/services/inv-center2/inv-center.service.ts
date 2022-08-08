import { Injectable } from '@angular/core';
import {ApiService} from '../../../@core/services';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvCenterService {

  private readonly endpoint = 'inv-center';

  constructor(
      private http: ApiService,
  ) { }

  getAll() {
    return this.http.get(`${this.endpoint}`, null, true);
  }

  crearCentro(name: string, jefe) {
    return this.http.post(`${this.endpoint}`, {name, jefe}, true);
  }

  removeCenter(id: string) {
    return this.http.delete(`${this.endpoint}`, {body: {id}}, true);
  }

  editarCentro(name: string, jefe, id) {
    return this.http.post(`${this.endpoint}/${id}`, {name, jefe}, true);
  }
}
