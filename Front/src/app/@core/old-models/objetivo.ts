export class Objetivo{
    public idOBjetivo : number;
    public nombre : string;
    public objetivos : Array<string>;

    public constructor(){
        this.nombre = "";
        this.objetivos = []
    }
}