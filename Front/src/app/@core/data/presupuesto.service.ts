import { Injectable } from '@angular/core';
import { Presupuesto } from '../old-models/presupuesto';
import { Rubro } from '../old-models/rubro';
import { Recurso } from '../old-models/recurso';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()

export class PresupuestoService {
   public presupuesto : Presupuesto;
   public rubros : Array<Rubro>;
    public controller : string = "Presupuestos"



   constructor(private http : HttpClient){}

   getData() {
        return this.presupuesto;
    }

    public createPresupuesto(presupuesto){
        return this.http.post(environment.api_url + this.controller, presupuesto);
    }

    public updatePresupuesto(presupuesto){
        return this.http.put(environment.api_url + this.controller, presupuesto);
    }

    public getPresupuesto(idPresupuesto : number){
        return this.http.get(environment.api_url + this.controller +"/"+idPresupuesto);
    }
    
    public getPresupuestos(){
        return this.http.get(environment.api_url + this.controller );
    }

    public deletePresupuesto(idPresupuesto : number){
        return this.http.delete(environment.api_url + this.controller +"/"+idPresupuesto);
    }
}
