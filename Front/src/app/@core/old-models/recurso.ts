export class Recurso {
    public idRecurso: number;
    public nombre: string;
    public fuente: string;
    public valor: number;

    public constructor(idRecurso: number, nombre : string, fuente : string, valor : number) { 
        this.idRecurso = idRecurso;
        this.nombre = nombre;
        this.fuente = fuente;
        this.valor = valor
    }
}