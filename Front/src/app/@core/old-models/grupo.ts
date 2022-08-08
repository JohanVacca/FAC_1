import { Persona } from "./persona";

export class Grupo{
    public idGrupo : number;
    public nombre : string;
    public codigo_grupo : string;
    public antiguedad : number;
    public categoria : string;
    public entidad_grupo : string; 
    public integrantes : Array<Persona> = [];

    public constructor(){
          this.nombre = "";
          this.categoria = "";
          this.codigo_grupo = "";
          this.antiguedad = null;
          this.entidad_grupo = "";
    }

     public addPerson(persona : Persona){
        this.integrantes.push(persona);
    }
}