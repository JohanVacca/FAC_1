
import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


let counter = 0;

@Injectable()
export class ProgramService {
  private controller: string = "programas";

  private program = [
    {
      idPrograma : 0,
      nombre : "Seleccione el programa."
    },
    {
      idPrograma : 1,
      nombre : "Auto Sostenimiento"
    },
    {
      idPrograma : 2,
      nombre : "Seguridad"
    },
    {
      idPrograma : 3,
      nombre : "Desarrollo"
    }
  ];

  private programArray: any[];

  constructor(private http: HttpClient) {
    
  }

  getPrograms(): Observable<any> {
    return this.http.get(environment.api_url + this.controller);
  }

  getProgramArray(): Observable<any[]> {
    return observableOf(this.programArray);
  }

  getProgram(): Observable<any> {
    counter = (counter + 1) % this.programArray.length;
    return observableOf(this.programArray[counter]);
  }
}
