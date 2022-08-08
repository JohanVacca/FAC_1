import { Rubro } from "./rubro";

export class Presupuesto{
    public idPresupuesto : number;
    public total_proyecto : number;
    public subtotales : Array<number> = [];
    public subtotal_fuentes : Array<number> = [];
    public rubros : Array<Rubro> = [];

    public constructor(){} 
}