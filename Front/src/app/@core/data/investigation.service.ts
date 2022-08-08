
import { of as observableOf, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';


let counter = 0;

@Injectable()
export class InvestigationService {
  private controller: string = "Investigacions";



  constructor(private http: HttpClient) {}

  public getInvestigations() {
    return this.http.get(environment.api_url + this.controller);
  }

  public getOneInvestigations(idInvestigation : number) {
    return this.http.get(environment.api_url + this.controller+ "/"+idInvestigation);
  }

  public createInvestigation(investigation) {
    return this.http.post(environment.api_url + this.controller, investigation);
  }

  public updateInvestigation(investigation) {
    return this.http.put(environment.api_url + this.controller, investigation);
  }

  public deleteInvestigation(idInvestigation : number) {
    return this.http.delete(environment.api_url + this.controller+ "/"+idInvestigation);
  }

}
