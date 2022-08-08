
import { Grupo } from "./grupo";

export class Equipo{
    public idEquipo : number;
    public grupo : Array<Grupo> = [];

    public constructor(){}
    
    public addGroup(grupo : Grupo){
        this.grupo.push(grupo);
    }
}