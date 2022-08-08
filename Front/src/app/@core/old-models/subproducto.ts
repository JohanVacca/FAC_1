import { Participacion } from "./participacion";

export class Subproducto{
    public idSubproducto : number;
    public nombre : string;
    public participaciones : Array<Participacion> = [];
    
    public constructor(){
        this.idSubproducto = 0;
        this.nombre = "";
    }
}