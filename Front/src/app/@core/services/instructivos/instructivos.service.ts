import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService, AuthStorageService } from '..';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InstructivosService {

  private readonly endpoint = 'instructivos';
  readonly apiUrl: string;

  constructor(
    private http: ApiService) {
  }
  uploadFile(formData) {
    return this.http.postForFile(`${this.endpoint}`, formData)
  }
  getall() {
    return this.http.get(`${this.endpoint}`, null, true);
  }

  getall13(data) {
    return this.http.get(`${this.endpoint}/Pag/${data}`, null, true);
  }

  getCount(){
    return this.http.get(`${this.endpoint}/Paginas`, null, true);
  }
  updatefile(id, data) {
    return this.http.patch(`${this.endpoint}/${id}`, data, null, true);
  }
}
