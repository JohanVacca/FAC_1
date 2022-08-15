"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let CronogramaSchema = new Schema({
  proyectId: String,
  ConvocatoriaId: String,
  actividades: [
    {
      idUnicoTare: Number,
      nombreAct: String,
      objetivo: String,
      subActividad: [
        {
          nombreSub: String,
          fechaInicio: Date,
          fechaFinal: Date,
          avance: Number,
          fechaReal: Date,
          Desface: Number,
          protegido: Boolean,
          //SUBACTIVIDAD PENDIENTE AGREGAR PROTEGIDO
        },
      ],
    },
  ],
});

module.exports = CronogramaSchema;
