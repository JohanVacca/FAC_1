import { Objetivo } from "./objetivo";
import { VigilanciaTecnologica } from "./vigilancia-tecnologica";
import { TipoInvestigacion } from "./tipo-investigacion";

export class Investigacion{
    public idInvestigacion : number;
    public nombre : string;
    public pregunta_investigacion : string;
    public resumen : string;
    public justificacion : string;
    public estado_arte : string;
    public marco_conceptual : string;
    public metodologia : string;
    public resultados_previos : string;
    public impacto_ambiental : string;
    public resultados_esperados : string;
    public objetivo: Objetivo;
    public palabras : string;
    public bibliografia : Array<string> = [];
    public vigilancia_tec : Array<VigilanciaTecnologica> = [];
    public tipo_investigacion : TipoInvestigacion;
    public otra_investigacion : TipoInvestigacion;
    
    public constructor(){
        this.nombre = "";
        this.resumen = "";
        this.palabras = "";
        this.marco_conceptual = "";
        this.estado_arte = "";
        this.resultados_previos = "";
        this.pregunta_investigacion = "";
        this.metodologia = "";
        this.resultados_esperados = "";
        this.impacto_ambiental = "";
        this.objetivo = new Objetivo();
        this.tipo_investigacion = new TipoInvestigacion();
        this.otra_investigacion = new TipoInvestigacion();
    }

}
