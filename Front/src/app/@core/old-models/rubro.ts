import { Recurso } from "./recurso";
import { Producto } from "./producto";

export class Rubro{
    public idRubro : number;
    public nombre : string;
    public tipo_recurso : Array<Recurso> = [];
    public producto : Array<Producto> = []
    
    public constructor(){
        this.idRubro = 0;
    	this.nombre = "";
    }



}