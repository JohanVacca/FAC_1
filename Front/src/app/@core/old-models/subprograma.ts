import { Linea } from "./linea";

export class Subprograma{
    public idSubprograma : number;
    public nombre : string;
    public linea : Linea;

    public constructor(){
        this.idSubprograma = 0;
        this.nombre = "";
        this.linea = new Linea();
     }
    
}