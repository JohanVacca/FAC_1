import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ApiService} from '../../../@core/services';
import { Necesidad } from '../../models/necesidad';

@Injectable({
  providedIn: 'root'
})
export class NecesidadService {

  private readonly endpoint = 'necesidad';

  selectedNecesidad : Necesidad = {
    selectedValue:0,
    name:'',
    programa:'',
    subprograma:'',
    lineasinv:'',
    descripcion:'',
    porque:'',
  };
  necesidades : Necesidad[];

  constructor(
      private http: ApiService,
  ) { }

  getAll() {
    return this.http.get(`${this.endpoint}`, null, true);
  }

  createNecesidad(name: string, descripcion: string, porque: string, lineasinv, programa, subprograma, selectedValue) {
    return this.http.post(`${this.endpoint}`, {name, descripcion, porque, lineasinv, programa, subprograma, selectedValue}, null, true);
  }

  removeUnidad(id: string) {
    return this.http.delete(`${this.endpoint}`, {body: {id}}, true);
  }

  //Cambios recientes
  patchNecesidad(id: string, necesidad: Necesidad): Observable<any>{
    return this.http.patch(`${this.endpoint}/${id}`, necesidad, null, true); //BEARER es el true del final
  }

  getNecesidadById(id: string): Observable<any>{
    return this.http.get(`${this.endpoint}/${id}`, null, true);
  }
}
