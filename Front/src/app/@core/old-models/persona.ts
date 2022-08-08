import { Cargo } from "./cargo";

export class Persona {
    public idPersona : number;
    public nombres : string;
    public apellidos : string;
    public email : string;
    public telefono : string;
    public dependencia : string;
    public grado : string
    public cargo : Cargo;
    public dedicacion_proyecto : number;

    public constructor(){
         this.nombres = "";
         this.apellidos = "";
         this.email = "";
         this.telefono = "";
         this.dependencia = "";
         this.grado = "";
         this.cargo = new Cargo();
         this.dedicacion_proyecto = null;
    }

    public toStringFullName(){
        return `${this.nombres} ${this.apellidos}`;
    }
}