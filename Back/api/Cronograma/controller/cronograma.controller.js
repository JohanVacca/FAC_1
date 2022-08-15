"use strict";

var CronogramaDao = require("../dao/cronograma.dao");
const daoProject = require("../../project/dao/project.dao");

const { check, validationResult } = require("express-validator/check");

/**
 * getAll cronogramas
 * @param req
 * @param res
 * @param next
 */
function getAll(req, res, next) {
  let query = req.query;
  CronogramaDao["getAll"](query)
    .then(async (cronogramas) => {
      // let aux = [];
      // cronogramas.forEach(async (crp) => {
      //   const proyecto = await daoProject
      //     .findOne({
      //       _id: crp.proyectId,
      //     })
      //     .exec();
      //   aux = [
      //     ...aux,
      //     {
      //       proyectName: proyecto?.iniciarProyecto[0]?.nombreProyecto ?? null,
      //       ...crp._doc,
      //     },
      //   ];
      //   console.log(aux)
      // });

      // console.log(aux);
      res.status(200).json({ cronogramas: cronogramas });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
}

/**
 * getById cronograma
 * @param req
 * @param res
 * @param next
 */
function getById(req, res, next) {
  try {
    validationResult(req).throw();

    let objId = req.params.id;

    CronogramaDao["getById"](objId)
      .then(async (cronograma) => {
        if (!cronograma) {
          res.status(404).json({ message: "cronograma not found." });
        } else {
          res.status(200).json({ cronograma: cronograma });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: err });
      });
  } catch (err) {
    const errorFormatter = ({ msg, param }) => {
      return `The value: ${param} ${msg}`;
    };
    const result = validationResult(req).formatWith(errorFormatter);
    if (!result.isEmpty()) {
      return res.status(422).json({ errors: result.array() });
    }
  }
}

/**
 * create a cronograma
 * @param req
 * @param res
 * @param next
 */
function create(req, res, next) {
  try {
    validationResult(req).throw();

    let cronograma = req.body;

    let objObj = JSON.parse(JSON.stringify(cronograma));

    CronogramaDao["create"](objObj)
      .then(async (_obj) => {
        res.status(201).json({ cronograma: _obj });
      })
      .catch((err) => {
        if (err.code === 11000) {
          res.status(409).json({ message: "cronograma already exists." });
        }
        {
          res.status(500).json({ message: err });
        }
      });
  } catch (err) {
    const errorFormatter = ({ msg, param }) => {
      return `The value: ${param} ${msg}`;
    };
    const result = validationResult(req).formatWith(errorFormatter);
    if (!result.isEmpty()) {
      return res.status(422).json({ errors: result.array() });
    }
  }
}

/**
 * update a cronograma
 * @param req
 * @param res
 * @param next
 */
function update(req, res, next) {
  try {
    validationResult(req).throw();
    let cronograma = req.body;
    let objObj = JSON.parse(JSON.stringify(cronograma));
    let objId = req.params.id;

    CronogramaDao["update"](objId, objObj)
      .then(async (_obj) => {
        if (!_obj) {
          res.status(404).json({ message: "cronograma not found." });
        } else {
          res.status(200).json({ cronograma: _obj });
        }
      })
      .catch((err) => res.status(500).json({ message: err }));
  } catch (err) {
    const errorFormatter = ({ msg, param }) => {
      return `The value: ${param} ${msg}`;
    };
    const result = validationResult(req).formatWith(errorFormatter);
    if (!result.isEmpty()) {
      return res.status(422).json({ errors: result.array() });
    }
  }
}

function updatebyproject(req, res, next) {
  try {
    validationResult(req).throw();

    let cronograma = req.body;
    let objObj = JSON.parse(JSON.stringify(cronograma));
    let objId = req.params.id;

    CronogramaDao["updatebyproject"](objId, objObj)
      .then(async (_obj) => {
        if (!_obj) {
          res.status(404).json({ message: "cronograma not found." });
        } else {
          res.status(200).json({ cronograma: _obj });
        }
      })
      .catch((err) => res.status(500).json({ message: err }));
  } catch (err) {
    const errorFormatter = ({ msg, param }) => {
      return `The value: ${param} ${msg}`;
    };
    const result = validationResult(req).formatWith(errorFormatter);
    if (!result.isEmpty()) {
      return res.status(422).json({ errors: result.array() });
    }
  }
}

/**
 * delete cronograma
 * @param req
 * @param res
 * @param next
 */
function remove(req, res, next) {
  try {
    validationResult(req).throw();

    let objId = req.params.id;

    CronogramaDao["remove"](objId)
      .then(async (cronograma) => {
        if (!cronograma) {
          res.status(404).json({ message: "cronograma not found." });
        } else {
          res.status(200).json({ message: "cronograma deleted." });
        }
      })
      .catch((err) => res.status(500).json({ message: err }));
  } catch (err) {
    const errorFormatter = ({ msg, param }) => {
      return `The value: ${param} ${msg}`;
    };
    const result = validationResult(req).formatWith(errorFormatter);
    if (!result.isEmpty()) {
      return res.status(422).json({ errors: result.array() });
    }
  }
}

function getIdConv(req, res) {
  let query = req.params.id;
  CronogramaDao["getAllId"](query)
    .then(async (cronogramas) => {
      res.status(200).json({ cronogramas: cronogramas });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
}

function getIdProject(req, res) {
  let query = req.params.id;
  CronogramaDao["getByIdProject"](query)
    .then(async (cronogramas) => {
      res.status(200).json({ cronogramas: cronogramas });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
}

const idValidation = [
  check("id")
    .exists()
    .withMessage("is required")
    .isMongoId()
    .withMessage("is an invalid ObjectId format."),
];

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getIdConv,
  getIdProject,
  updatebyproject,
  idValidation,
};
