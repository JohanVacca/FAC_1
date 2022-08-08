
import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

let counter = 0;

@Injectable()
export class ObjetiveSpecificService {
  private controller: string = "ObjEspecificos";

  

  

  constructor(private http: HttpClient) {
  }

  createObjetiveSpecific(objetive){
    return this.http.post(environment.api_url + this.controller, objetive);
  }

  updateObjetiveSpecific(objetive){
    return this.http.put(environment.api_url + this.controller, objetive);
  }

  getObjetivesSpecifics(): Observable<any> {
    return this.http.get(environment.api_url + this.controller);
  }

  getOneObjetiveSpecific(id:number): Observable<any> {
    return this.http.get(environment.api_url + this.controller+"/"+id);
  }

  deleteObjetiveSpecific(id:number): Observable<any> {
    return this.http.delete(environment.api_url + this.controller+"/"+id);
  }

}
