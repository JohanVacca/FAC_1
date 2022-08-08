import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class ResourceService {

  public controller: string = "Recursos";
  
  constructor(private http: HttpClient){}



  public createResource(resource){
    return this.http.post(environment.api_url + this.controller, resource);
  }

  public updateResource(resource){
    return this.http.post(environment.api_url + this.controller, resource);
  }

  public getResources(): Observable<any> {
    return this.http.get(environment.api_url + this.controller);
  }

  public getOneResource(idResource : number){
    return this.http.get(environment.api_url + this.controller+"/"+idResource);
  }

  public deleteResource(idResource : number){
    return this.http.delete(environment.api_url + this.controller+"/"+idResource);
  }
}

