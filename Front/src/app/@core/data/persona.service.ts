
import { of as observableOf, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Persona } from '../old-models/persona';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

let counter = 0;

@Injectable()
export class PersonaService {

  private personas: Array<Persona>;
  private controller: string = "Personas";

  private personArray: any[];

  constructor(private http: HttpClient) {

  }


  public createPerson(person) {
    return this.http.post(environment.api_url + this.controller, person);
  }

  public updatePerson(person){
    return this.http.put(environment.api_url + this.controller, person);
  }

  public getPeople() {
    return this.http.get(environment.api_url + this.controller);
  }
  public getOnePerson(idPerson : number) {
    return this.http.get(environment.api_url + this.controller+ "/"+idPerson);
  }

  public deletePerson(idPerson : number) {
    return this.http.delete(environment.api_url + this.controller+ "/"+idPerson);
  }

  getPeopleArray(): Observable<any[]> {
    return observableOf(this.personArray);
  }

  getPerson(): Observable<any> {
    counter = (counter + 1) % this.personArray.length;
    return observableOf(this.personArray[counter]);
  }
}
