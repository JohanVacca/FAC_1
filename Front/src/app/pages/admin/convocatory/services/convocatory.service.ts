import { Injectable } from '@angular/core';
import { ApiService } from '../../../../@core/services';
import { map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { ConModel } from '../../../../shared/models/Convocatoria.model';

@Injectable({
  providedIn: 'root'
})
export class ConvocatoryService {

  private readonly endpoint = 'Convocatoria';

  constructor(
    private http: ApiService,
  ) { }

  getall(){
    return this.http.get(`${this.endpoint}`,null,true)
    .pipe(
      map((res: any) => {
        return res['convocatorias'] || null;
      }),
    )
  };

  getById(Convocatoria: string) {
    return this.http.get(`${this.endpoint}/${Convocatoria}`, null, true)
      .pipe(
        map((res: any) => {
          return res['convocatoria'] || null;
        }),
      );
  }

  add(Convocatoria: Partial<ConModel>){
    return this.http.post(`${this.endpoint}`,Convocatoria)
      .pipe(
        map((res: HttpResponse<ConModel[]>) =>{
          return res['convocatoria'] || null;
        }),
      );
  };

  update(ConvocatoriaId: string, Convocatoria: Partial<ConModel>){
    return this.http.patch(`${this.endpoint}/${ConvocatoriaId}`,Convocatoria,null,true)
    .pipe(
      map((res: HttpResponse<ConModel[]>) => {
        return res['convocatoria'] || null;
      }),
    );
  };

  delete(ConvocatoriaId: string){
    return this.http.delete(`${this.endpoint}/${ConvocatoriaId}`,null,true)
    .pipe(
      map((res: HttpResponse<ConModel[]>) => {
        return res['convocatoria'] || null;
      }),
    );
  };
  
  activeOrDeactivateUser(userId: string, newStatus: boolean) {
    return this.http.patch(`${this.endpoint}/${userId}`, {'isActive': newStatus }, null, true)
      .pipe(
        map((res: HttpResponse<ConModel[]>) => {
          return res['convocatoria'] || null;
        }),
      ).toPromise();
  }

}
