export class VigilanciaTecnologica{
    public titulo : string;
    public anio : number;
    public pais : string;
    public autor : string;
    public resumen : string;
    public serial : string;
    public tipo : Array<string>;

    constructor (){
    	this.titulo = "";
    	this.anio = null;
    	this.autor = "";
    	this.pais = "";
    	this.resumen = "";
    	this.tipo = [""];
    }

}