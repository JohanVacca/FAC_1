import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class FormulacionService {

  public controller: string = "Formulacions";
  

  constructor(private http: HttpClient){}



  public createFormulation(formulation){
    return this.http.post(environment.api_url + this.controller, formulation)
  }

  public updateFormulation(formulation){
    return this.http.put(environment.api_url + this.controller, formulation)
  }

  public getAllFormulations(): Observable<any> {
    return this.http.get(environment.api_url + this.controller)
  }

  public getOneFormulation(idFormulation : number){
    return this.http.get(environment.api_url + this.controller+"/"+idFormulation)
  }

  public deleteFormulacion(idFormulation: number){
    return this.http.delete(environment.api_url + this.controller+"/"+idFormulation)
  }

}

