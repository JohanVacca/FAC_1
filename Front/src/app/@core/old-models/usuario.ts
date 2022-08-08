import { Rol } from "./rol";
import { Persona } from "./persona";

export class Usuario{
  public  idUsuario : number;
  public  codigo_usuario : string;
  public  username : string;
  public  password : string;
  public  passwordRepeat : string;

  public  persona : Persona;
  public  rol : Rol;

  public constructor(){
    this.persona = new Persona();
    this.rol = new Rol();
    this.codigo_usuario = "";
    this.username = "";
    this.password = "";
    this.passwordRepeat = "";
  }

}
