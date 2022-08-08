import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class GroupService {

  public controller: string = "Grupos";
 
  constructor(private http: HttpClient){}

  public createGroup(group){
    return this.http.post(environment.api_url + this.controller, group)
  }

  public updateGroup(group){
    return this.http.put(environment.api_url + this.controller, group)
  }

  public getGroups(): Observable<any> {
    return this.http.get(environment.api_url + this.controller)
  }

  public getOneGroup(idGroup : number){
    return this.http.get(environment.api_url + this.controller+"/"+idGroup)
  }

  public deleteGroup(idGroup : number){
    return this.http.delete(environment.api_url + this.controller+"/"+idGroup)
  }

}

