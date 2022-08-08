import { Usuario } from "./usuario";
import { Anexo } from "./anexo";

export class Convocatoria{
    public idConvocatoria : number;
    public nombre : string;
    public tipo_convocatoria : string;
    public usuario : Usuario;
    public anexos : Array<Anexo> = [];

    constructor(){
        this.idConvocatoria = 0;
        this.nombre = "",
        this.tipo_convocatoria = "";
        this.usuario = new Usuario();
    }
}
