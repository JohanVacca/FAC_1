import { Investigacion } from "./investigacion";
import { Proyecto } from "./proyecto";
import { Presupuesto } from "./presupuesto";
import { AvaladorInvestigacion } from "./avalador-investigacion";
import { Equipo } from "./equipo";
 
export class Formulacion{
    public idFormulacion : number;
    public lugar_ejecucion : string;
    public duracion : number;
    public investigacion : Investigacion;
    public proyecto : Proyecto;
    public presupuesto : Presupuesto;
    public avalador : AvaladorInvestigacion;
    public equipo : Equipo;

    public constructor(){
    	 this.duracion = null;
         this.lugar_ejecucion = "";
         this.investigacion = new Investigacion();
         this.proyecto = new Proyecto();
         this.presupuesto = new Presupuesto();
         this.avalador = new AvaladorInvestigacion();
         this.equipo = new Equipo();
    }
}