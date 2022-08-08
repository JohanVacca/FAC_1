import { Convocatoria } from "./convocatoria";
import { Linea } from "./linea";
import { Anexo } from "./anexo";
import { Persona } from "./persona";
import { Programa } from "./programa";

export class Proyecto {
    public idProyecto : number;
    public nombre: string;
    public fecha_inscripcion: Date;
    public estado_proyecto: string;
    public convocatoria : Convocatoria;
    public programa : any;
    public anexos : Array<Anexo> = [];
    public gestorActi : Persona;
    public linea: any;

    public constructor(){
        this.nombre = "";
        this.estado_proyecto = "ACTIVO";
        this.gestorActi = new Persona();
        this.fecha_inscripcion = new Date();
        this.convocatoria = new Convocatoria();
        this.programa = new Programa();
    }
}
