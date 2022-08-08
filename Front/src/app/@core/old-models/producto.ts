import { Subproducto } from "./subproducto";
import { Rubro } from "./rubro";

export class Producto{
    public idProducto : number;
    public nombre : string;
    public subproductos : Array<Subproducto> = [];

    constructor(){
        this.idProducto = 0;
        this.nombre = "";
    }
}