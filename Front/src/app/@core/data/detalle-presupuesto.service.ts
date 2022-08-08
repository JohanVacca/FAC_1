import { Injectable } from '@angular/core';
import { Presupuesto } from '../old-models/presupuesto';
import { Rubro } from '../old-models/rubro';
import { Recurso } from '../old-models/recurso';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()

export class DetallePresupuestoService {
   
    public controller : string = "DPresupuestos"

  

   constructor(private http : HttpClient){}

  

    public createDetallePresupuesto(presupuesto){
        return this.http.post(environment.api_url + this.controller, presupuesto);
    }

    public updateDetallePresupuesto(presupuesto){
        return this.http.put(environment.api_url + this.controller, presupuesto);
    }

    public getDetallePresupuesto(id : number){
        return this.http.get(environment.api_url + this.controller +"/"+id);
    }
    
    public getDetallePresupuestos(){
        return this.http.get(environment.api_url + this.controller );
    }

    public deleteDetallePresupuesto(id : number){
        return this.http.delete(environment.api_url + this.controller +"/"+id);
    }
}
