import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class RubroService {

  public controller: string = "Rubros";
  
  constructor(private http: HttpClient){}



  public createRubro(rubro){
    return this.http.post(environment.api_url + this.controller, rubro);
  }

  public updateRubro(rubro){
    return this.http.put(environment.api_url + this.controller, rubro);
  }

  public getRubros(): Observable<any> {
    return this.http.get(environment.api_url + this.controller);
  }

  public getOneRubro(idRubro : number){
    return this.http.get(environment.api_url + this.controller+"/"+idRubro);
  }

  public deleteRubro(idRubro : number){
    return this.http.delete(environment.api_url + this.controller+"/"+idRubro);
  }
}

