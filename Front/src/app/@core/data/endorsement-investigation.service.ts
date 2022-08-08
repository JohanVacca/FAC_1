
import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';


let counter = 0;

@Injectable()
export class EndorsementInvestigationService {

  public avaladores_investigacion = [
    {
      idAvalador : 0,
      nombre : "Selecciona el avalador de la investigacion."
    },
    {
      idAvalador : 1,
      nombre : "Dirección de Ciencia, Tecnología e Innovación (DICTI)."
    },
    {
      idAvalador : 2,
      nombre : "Dirección de Ciencia"
    },
    {
      idAvalador : 3,
      nombre : "Otra"
    },
  ];

  private avaladores_investigacionArray: any[];

  constructor() {
    // this.programArray = Object.values(this.program);
  }

  getEndorsementInvestigations(): Observable<any> {
    return observableOf(this.avaladores_investigacion);
  }

  getEndorsementInvestigationArray(): Observable<any[]> {
    return observableOf(this.avaladores_investigacionArray);
  }

  getEndorsementInvestigation(): Observable<any> {
    counter = (counter + 1) % this.avaladores_investigacionArray.length;
    return observableOf(this.avaladores_investigacionArray[counter]);
  }
}
