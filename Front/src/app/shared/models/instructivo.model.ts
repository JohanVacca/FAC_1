import { UserModel } from './user.model';

export interface InstructivoModel {
  _id: String,
  Codigo: String,
  titulo: String,
  objetivo: String,
  NombreArchivo: String,
  FechaCreacion: String,
  User: String,
  Modificar?: Modificar,
  Eliminacion?: Eliminacion,
  Estado: Number,
}
export interface Modificar {
  FBorrado?: String,
  UserBorradir?: String,
  Estado?: Number,
}
export interface Eliminacion {
  fecha?: String,
  User?: String,
}
