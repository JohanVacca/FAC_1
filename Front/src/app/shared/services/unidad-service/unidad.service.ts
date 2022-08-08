import { Injectable } from '@angular/core';
import {ApiService} from '../../../@core/services';

@Injectable({
  providedIn: 'root'
})
export class UnidadService {

  private readonly endpoint = 'unidad';

  constructor(
      private http: ApiService,
  ) { }

  getAll() {
    return this.http.get(`${this.endpoint}`, null, true);
  }

  createUnidad(name: string, ubicacion: string, rResponsable, comandante) {
    return this.http.post(`${this.endpoint}`, {name,ubicacion, rResponsable, comandante}, true);
  }

  removeUnidad(id: string) {
    return this.http.delete(`${this.endpoint}`, {body: {id}}, true);
  }
}
