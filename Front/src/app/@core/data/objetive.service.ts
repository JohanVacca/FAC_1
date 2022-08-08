
import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

let counter = 0;

@Injectable()
export class ObjetiveGeneralService {
  private controller: string = "ObjGenerals";

  

  

  constructor(private http: HttpClient) {
  }

  createObjetiveGeneral(objetive){
    return this.http.post(environment.api_url + this.controller, objetive);
  }

  updateObjetiveGeneral(objetive){
    return this.http.put(environment.api_url + this.controller, objetive);
  }

  getObjetivesGenerals(): Observable<any> {
    return this.http.get(environment.api_url + this.controller);
  }

  getOneObjetiveGeneral(id:number): Observable<any> {
    return this.http.get(environment.api_url + this.controller+"/"+id);
  }

  deleteObjetiveGeneral(id:number): Observable<any> {
    return this.http.delete(environment.api_url + this.controller+"/"+id);
  }

}
