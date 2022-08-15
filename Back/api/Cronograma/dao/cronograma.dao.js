"use strict";

const CronogramaSchema = require("../model/cronograma.model");
const mongoose = require("mongoose");
const daoProject = require("../../project/dao/project.dao");

/**
 * getAll Cronogramas
 */

CronogramaSchema.static("getAll", async (query) => {
  try {
    return await CronogramaDao.find(query).exec();
  } catch (err) {
    throw err;
  }
});

/**
 * getById Cronograma
 */
CronogramaSchema.static("getById", async (id) => {
  try {
    return await CronogramaDao.findOne({ _id: id }).exec();
  } catch (err) {
    throw err;
  }
});

CronogramaSchema.static("getAllId", async (id) => {
  try {
    return await CronogramaDao.find({ Convocatoria: id }).exec();
  } catch (err) {
    throw err;
  }
});

CronogramaSchema.static("getByIdProject", async (id) => {
  try {
    return await CronogramaDao.findOne({ proyectId: id }).exec();
  } catch (err) {
    throw err;
  }
});

/**
 * create a Cronograma
 */
CronogramaSchema.static("create", async (Cronograma) => {
  if (typeof Cronograma !== "object") {
    throw new TypeError("Cronograma is not a valid object.");
  }

  let _obj = new CronogramaDao(Cronograma);
  let saved = await _obj.save();
  let __obj = await CronogramaDao.findOne({ _id: saved._id }).exec();
  return __obj;
});

/**
 * update a Cronograma
 */
CronogramaSchema.static("update", async (id, cronograma) => {
  if (typeof cronograma !== "object") {
    throw new TypeError("Cronograma is not a valid object.");
  }

  try {
    return await CronogramaDao.findOneAndUpdate({ _id: id }, cronograma, {
      new: true,
    }).exec();
  } catch (err) {
    throw err;
  }
});

/**Update cronograma por id project */
CronogramaSchema.static("updatebyproject", async (id, Cronograma) => {
  if (typeof Cronograma !== "object") {
    throw new TypeError("Cronograma is not a valid object.");
  }

  try {
    return await CronogramaDao.findOneAndUpdate({ proyectId: id }, Cronograma, {
      new: true,
    }).exec();
  } catch (err) {
    throw err;
  }
});
/**
 * remove a Cronograma
 */
CronogramaSchema.static("remove", async (id) => {
  try {
    return await CronogramaDao.findOneAndRemove({ _id: id }).exec();
  } catch (err) {
    throw err;
  }
});

let CronogramaDao = mongoose.models['Cronograma'] || mongoose.model("Cronograma", CronogramaSchema); //Modificado
module.exports = CronogramaDao;
