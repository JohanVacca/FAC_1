import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService, AuthStorageService } from '..';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InstructivosService {

  private readonly endpoint = 'ProyectIns';
  readonly apiUrl: string;

  constructor(
    private http: ApiService) {
  }
  uploadFile(formData) {
    return this.http.postForFile(`${this.endpoint}`, formData);
  }
  getall() {
    return this.http.get(`${this.endpoint}`, null, true);
  }

  getIdProyect(ProyectIns: string) {
    return this.http.get(`${this.endpoint}/getIdProyec/${ProyectIns}`, null, true)
      .pipe(
        map((res: any) => {
          return res['instructivos'] || null;
        }),
      );
  }
  
  deletefile(id,dato) {
    return this.http.delete(`${this.endpoint}/${id}`, null, true);
  }
}
