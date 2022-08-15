import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateNececidadesTableServiceService {

  public updateTablenecesitades = new BehaviorSubject<boolean>(false);
  public updateTablenecesitadesObs$ = this.updateTablenecesitades.asObservable()

  updateTable(){
    this.updateTablenecesitades.next(true);
  }
}
