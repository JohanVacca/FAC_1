import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class TeamIntegrantService {

  public controller: string = "Equipos";
 
  constructor(private http: HttpClient){}

  public createIntegrantTeam(integrantTeam){
    return this.http.post(environment.api_url + this.controller, integrantTeam)
  }

  public updateIntegrantTeam(integrantTeam){
    return this.http.put(environment.api_url + this.controller, integrantTeam)
  }

  public getIntegrantTeams(): Observable<any> {
    return this.http.get(environment.api_url + this.controller)
  }

  public getOneIntegrantTeam(idIntegrantTeam : number){
    return this.http.get(environment.api_url + this.controller+"/"+idIntegrantTeam)
  }

  public deleteIntegrantTeam(idIntegrantTeam : number){
    return this.http.delete(environment.api_url + this.controller+"/"+idIntegrantTeam)
  }

}

