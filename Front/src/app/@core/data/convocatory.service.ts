import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class ConvocatoryService {

  public controller: string = 'Convocatoria';

  constructor(private http: HttpClient){}


  /*public createConvocatory(convocatory){
    return this.http.post(environment.api_url + this.controller, convocatory)
  }

  public updateConvocatory(convocatory){
    return this.http.put(environment.api_url + this.controller, convocatory)
  }

  public getConvocatories(): Observable<any> {
    return this.http.get(environment.api_url + this.controller)
  }

  public getOneConvocatory(idConvocatory : number){
    return this.http.get(environment.api_url + this.controller+"/"+idConvocatory)
  }

  public deleteConvocatory(idConvocatory : number){
    return this.http.delete(environment.api_url + this.controller+"/"+idConvocatory)
  }*/

}

