import { Subprograma } from "./subprograma";

export class Programa{
    public idPrograma : number;
    public nombre : string;
    public subprograma : Subprograma;
    
    constructor(){
        this.idPrograma = 0;
        this.nombre = "";
        this.subprograma = new Subprograma();
    }
}