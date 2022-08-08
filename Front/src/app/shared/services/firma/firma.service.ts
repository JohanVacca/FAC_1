import {Injectable, OnInit} from '@angular/core';
import {ApiService} from '../../../@core/services';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirmaService {

  private readonly endpoint = 'firma';

  constructor(
      private http: ApiService,
  ) { }

  public getFirma(userId: string): Observable<any> {
    return this.http.get(`${this.endpoint}/${userId}`, null, true)
        .pipe(map((res: any) => res || null));
  }

  public saveFirma(firma: File, userId: string): Observable<any> {
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('file', firma);
    return this.http.postFirma(`${this.endpoint}`, formData);
  }

  public removeFirma(userId): Observable<any> {
    return this.http.delete(`${this.endpoint}/${userId}`)
        .pipe(map((res: any) => res || null));
  }

  public firmar(firmaId, proyectoId): Observable<any> {
    return this.http.patch(`${this.endpoint}`, {firmaId, proyectoId});
  }
}
