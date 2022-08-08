import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class RolesService {

  public controller: string = "Roles";
  data = [{
    id: 1,
    firstName: 'Admin 1',
    lastName: 'Administrador Tipo 1',
  }, {
    id: 2,
    firstName: 'Inv 1',
    lastName: 'Investigador Tipo 1',
  }, {
    id: 3,
    firstName: 'Inv 2',
    lastName: 'Investigador Tipo 2',
  }, {
    id: 4,
    firstName: 'Eval 1',
    lastName: 'Evaluador Tipo 1',
  }, {
    id: 5,
    firstName: 'Eval 2',
    lastName: 'Evaluador Tipo 2',
  },{
    id: 6,
    firstName: 'Resp 2',
    lastName: 'Responsable Tipo 2',
  } ];

  constructor(private http: HttpClient){}



  getData() {
    return this.data;
  }

  public createRol(rol){
    return this.http.post(environment.api_url + this.controller, rol)
  }

  public updateRol(rol){
    return this.http.put(environment.api_url + this.controller, rol)
  }

  public getRoles(): Observable<any> {
    return this.http.get(environment.api_url + this.controller)
  }

  public getOneRol(idRol : number){
    return this.http.get(environment.api_url + this.controller+"/"+idRol)
  }

  public deleteRol(idRol : number){
    return this.http.delete(environment.api_url + this.controller+"/"+idRol)
  }

}

