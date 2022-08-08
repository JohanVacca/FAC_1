
import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

let counter = 0;

@Injectable()
export class LineService {
  private controller: string = "lineas";

  public lineas  = [
    {
      idLinea : 0,
      nombre : "Selecciona la linea de investigacion."
    },
    {
      idLinea : 1,
      nombre : "Linea 1"
    },
    {
      idLinea : 2,
      nombre : "Linea 2"
    },
    {
      idLinea : 3,
      nombre : "Linea 3"
    }    
];

  private lineArray: any[];

  constructor(private http: HttpClient) {
  }

  createLine(line){
    return this.http.post(environment.api_url + this.controller, line);
  }

  updateLine(line){
    return this.http.put(environment.api_url + this.controller, line);
  }

  getlines(): Observable<any> {
    return this.http.get(environment.api_url + this.controller);
  }

  getLinesArray(): Observable<any[]> {
    return observableOf(this.lineArray);
  }

  getLine(): Observable<any> {
    counter = (counter + 1) % this.lineArray.length;
    return observableOf(this.lineArray[counter]);
  }
}
