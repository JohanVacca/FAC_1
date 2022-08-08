
import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

let counter = 0;

@Injectable()
export class SubprogramService {
  private controller: string = "subprogramas";

  public subprogramas = [
    {
      idSubprograma : 0,
      nombre : "Seleccione el Subprograma."
    },
    {
      idSubprograma : 1,
      nombre : "SubPrograma 1"
    },
    {
      idSubprograma : 2,
      nombre : "Subprograma 2"
    },
    {
      idSubprograma : 3,
      nombre : "Subprograma 3"
    },
  ];

  private subprogramArray: any[];

  constructor(private http: HttpClient) {
   
  }

  getSubprograms(): Observable<any> {
    return this.http.get(environment.api_url + this.controller);
  }

  getSubprogramArray(): Observable<any[]> {
    return observableOf(this.subprogramArray);
  }

  getSubprogram(): Observable<any> {
    counter = (counter + 1) % this.subprogramArray.length;
    return observableOf(this.subprogramArray[counter]);
  }
}
