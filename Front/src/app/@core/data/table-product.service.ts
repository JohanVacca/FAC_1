import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class TableproductService {
  public controller = "Prods"



  public constructor(private http : HttpClient) {
   
  }


  getProduct(idProduct : number){
    return this.http.get(environment.api_url + this.controller + "/"+idProduct)
  }

  getProducts():Observable<any>{
    return this.http.get(`${environment.api_url}${this.controller}`)
  }

  createProduct(product){
    return this.http.post(environment.api_url + this.controller, product);
  }

  updateProduct(product){
    return this.http.put(environment.api_url + this.controller, product);
  }

  deleteProduct(id : number){

    return this.http.delete(environment.api_url + this.controller + "/"+id)
  }

}
