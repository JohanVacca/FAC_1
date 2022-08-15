"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let UserSchema = require("../../user/model/user.model");

const User = mongoose.model("user", UserSchema);
const date = new Date();
date.getMonth()

let ProjectSchema = new Schema({

  date: String,
  UserId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  Convocatoria: { type: mongoose.Schema.Types.ObjectId, ref: "Convocatoria" },
  objetivosEspecificos: [{ descr: String }],
  ProyectoBloqueado: Boolean,
  Seguimiento: Boolean,
  Entidades: [
    {
      nombre: String,
      nit: String,
      personaACargo: String,
      numeroDeContacto: String,
      email: String,
    },
  ],
  EquipoInvestigaciones: [
    {
      nombres: String,
      apellido: String,
      identificacion: Number,
      grupos: String,
      lider: String,
      grado: String,
      dedicacion: String,
      cargo: String,
    },
  ],
  AgregarDetallesRubros: [
    {
      idRubro: String,
      RolDelInvestigador: String,
      PerfilDelInvestigador: String,
      NombreRubro: String,
      NombreDelInvestigador: String,
      Justificacion: String,
      HorasSemanales: String,
      Formacion: String,
      Experiencia: String,
      EntidadesCostos: Number,
      DuracionEnMeses: String,
      Descripcion: String,
      tipoDeRubro: String,
      entidad: String,
      PresupuestoEjecutado: Number,
      listaRubros: [{
        rubro: Number,
        consecutivo: String,
        factura: {
          data: Object,
          name: String,
          path: String,
          created_at: {type: Date, default: Date.now()}
        }
      }]
    },
  ],
  productosEsperados: [
    {
      descripcion: String,
      partFuerza: Number,
      partOtros: Number,
      rubroRelacionado: String,
      tipoProducto: String,
      subActividad: String, //SUBACTIVIDAD
    },
  ],
  resultadosPrevios: String,
  iniciarProyecto: [
    {
      telefonoGestor: Number,
      subprograma: String,
      programa: String,
      nombreProyecto: String,
      modelo: String,
      lugar: String,
      linea: String,
      gestor: String,
      email: String,
      duracion: Number,
      dependencia: String,
      comandante: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      avala: String,
      centroDeInvestigacion: String,
      unidades: String,
    },
  ],
  metodologia: String,
  marcoConceptual: String,
  resumen: String,
  informaciones: [
    {
      impacto: String,
      nInvestigacion: String,
      pregunta: String,
    },
  ],
  estadoArte: String,
  bibliografias: [
    {
      bibliografia: String,
    },
  ],
  palabraClaves: [
    {
      palabra: String,
    },
  ],
  resultadosEsperados: String,
  objetivoGeneral: String,
  grupos: [
    {
      nombreGrupo: String,
      entidad: String,
      antiguedad: String,
      codigo: String,
      categoria: String,
      lider: String
    },
  ],
  ValorTotal: Number,
  calificaciones: [
    {
      idEv: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      ValorParcial: Number,
      Evaluado: Boolean,
      Valores: {
        vlrequipo: Number,
        vlrestado: Number,
        vlrmarco: Number,
        vlrmetodologia: Number,
        vlrobjEspecifico: Number,
        vlrobjGeneral: Number,
        vlrpalabrasClaves: Number,
        vlrproyecto: Number,
        vlrresumen: Number,
        vlrunidadependencia: Number,
      },
    },
  ],
  firmas: [{
    name: String,
    idQuienFirma: String,
    status: Boolean,
    date: Date,
  }],
  planteamiento: {
    planteamiento: String,
    enQueConsiste: String,
    porQueSeRequiere: String,
    paraQueDesarrollarlo: String,
    beneficiosFAC: String,
    utilidad: Number,
    inversion: Number,
  },
  evaluadorId: String,
  riesgos: [{
    descripcion: String,
    consecuencia: String,
    accion: String,
  }],
  version: Number,
});

module.exports = ProjectSchema;
