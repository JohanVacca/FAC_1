
import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';


let counter = 0;

@Injectable()
export class TypeInvestigationService {

  public  tipos_investigacion = [
    {
      idTipo_investigacion : 0,
      nombre : "Seleccione el tipo de investigacion."
    },
    {
      idTipo_investigacion : 1,
      nombre : "Aplicada"
    },
    {
      idTipo_investigacion : 2,
      nombre : "Desarrollo tecnologico"
    },
    {
      idTipo_investigacion : 3,
      nombre : "Inovacion"
    }
  ]

  private tipos_investigacionArray: any[];

  constructor() {
    // this.programArray = Object.values(this.program);
  }

  getTypeInvestigations(): Observable<any> {
    return observableOf(this.tipos_investigacion);
  }

  getTypeInvestigationArray(): Observable<any[]> {
    return observableOf(this.tipos_investigacionArray);
  }

  getTypeInvestigation(): Observable<any> {
    counter = (counter + 1) % this.tipos_investigacion.length;
    return observableOf(this.tipos_investigacion[counter]);
  }
}
