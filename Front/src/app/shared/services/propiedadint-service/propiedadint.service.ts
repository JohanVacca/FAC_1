import { Injectable } from '@angular/core';
import {ApiService} from '../../../@core/services';

@Injectable({
  providedIn: 'root'
})
export class PropiedadintService {

  private readonly endpoint = 'propiedadint';

  constructor(
      private http: ApiService,
  ) { }

  createPropiedad(proyecto, cronograma, subactividad, detalleProteccion: string, actividad: string) {
    return this.http.post(`${this.endpoint}`, {detalleProteccion,proyecto, cronograma, subactividad, actividad}, null, true);
  }

  getAll() {
    return this.http.get(`${this.endpoint}`, null, true);
  }

  removePropiedad(id: string) {
    return this.http.delete(`${this.endpoint}`, {body: {id}}, true);
  }

}
