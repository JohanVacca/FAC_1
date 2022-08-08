'use strict';

var ProyectoDao = require('../dao/project.dao');
var bcrypt = require('bcrypt-nodejs');

const {validationResult} = require('express-validator/check');

/**
 * Método para traer los usuarios ACTIVOS
 * @param req
 * @param res
 * @param next
 */
function getAll(req, res, next) {
    let query = req.query;
    ProyectoDao['getAll'](query)
        .then(async Proyectos => {
            res.status(200).json({"Proyectos": Proyectos});
        })
        .catch(err => {
            res.status(500).json({message: err});
        });
}

/**
 * Método para traer un usuario
 * @param req
 * @param res
 * @param next
 */
function getById(req, res, next) {
    try {
        validationResult(req).throw();

        let ProyectoId = req.params.id;

        ProyectoDao['getById'](ProyectoId)
            .then(async Proyecto => {
                if (!Proyecto) {
                    res.status(404).json({message: 'Proyecto not found.'});
                } else {
                    res.status(200).json({"Proyecto": Proyecto});
                }
            })
            .catch(err => {
                res.status(500).json({message: err});
            });
    } catch (err) {
        const errorFormatter = ({msg, param}) => {
            return `The value: ${param} ${msg}`;
        };
        const result = validationResult(req).formatWith(errorFormatter);
        if (!result.isEmpty()) {
            return res.status(422).json({errors: result.array()});
        }
    }
}


/**
 * Método para crear un usuario
 * @param req
 * @param res
 * @param next
 */
function create(req, res, next) {

    try {
        validationResult(req).throw();

        let Proyecto = req.body;

        bcrypt.hash(Proyecto.password, null, null, (err, hash) => {
            if (err) {
                return res.status(400).send({message: 'Password encryption problem.'});
            }

            if (hash) {
                Proyecto.password = hash;
                let ProyectoObj = JSON.parse(JSON.stringify(Proyecto));

                ProyectoDao['create'](ProyectoObj)
                    .then(async _Proyecto => {
                        res.status(201).json({"Proyecto": _Proyecto});
                    }).catch(err => {
                    if (err.code === 11000) {
                        res.status(409).json({message: "Proyecto already exists."});
                    }
                    {
                        res.status(500).json({message: err});
                    }
                });
            }
        });


    } catch (err) {
        const errorFormatter = ({msg, param}) => {
            return `The value: ${param} ${msg}`;
        };
        const result = validationResult(req).formatWith(errorFormatter);
        if (!result.isEmpty()) {
            return res.status(422).json({errors: result.array()});
        }
    }
}


/**
 * Método para actualizar un usuario
 * @param req
 * @param res
 * @param next
 */
function update(req, res, next) {
    try {
        validationResult(req).throw();

        let Proyecto = req.body;
        let ProyectoObj = JSON.parse(JSON.stringify(Proyecto));
        let ProyectoId = req.params.id;

        ProyectoDao['update'](ProyectoId, ProyectoObj)
            .then(async _Proyecto => {
                if (!_Proyecto) {
                    res.status(404).json({message: 'Proyecto not found.'});
                } else {
                    res.status(200).json({"Proyecto": _Proyecto});
                }
            }).catch(err => res.status(500).json({message: err}));

    } catch (err) {
        const errorFormatter = ({msg, param}) => {
            return `The value: ${param} ${msg}`;
        };
        const result = validationResult(req).formatWith(errorFormatter);
        if (!result.isEmpty()) {
            return res.status(422).json({errors: result.array()});
        }
    }
}

/**
 * Método para eliminar un rubro de un proyecto
 * @param req
 * @param res
 * @param next
 */
async function removeRubro(req, res, next) {
    try {
        const ProjectObject = JSON.parse(JSON.stringify(req.body));
        const {ProjectId, idDetalleRubro, idRubro} = ProjectObject;
        const projectObj = await ProyectoDao.findOne({_id: ProjectId})
        projectObj.AgregarDetallesRubros.map(rubroActual => {
            if (String(rubroActual._id) === String(idDetalleRubro)) {
                rubroActual.listaRubros = rubroActual.listaRubros.filter(rubroSeleccionado => String(rubroSeleccionado._id) !== String(idRubro));
            }
        })
        ProyectoDao['update'](ProjectId, projectObj)
            .then(async _Proyecto => {
                if (!_Proyecto) {
                    res.status(404).json({message: 'Proyecto not found.'});
                } else {
                    res.status(200).json({"Proyecto": _Proyecto});
                }
            }).catch(err => res.status(500).json({message: err}));

    } catch (err) {
        const errorFormatter = ({msg, param}) => {
            return `The value: ${param} ${msg}`;
        };
        const result = validationResult(req).formatWith(errorFormatter);
        if (!result.isEmpty()) {
            return res.status(422).json({errors: result.array()});
        }
    }
}

/**
 * Método para actualizar un rubro de un proyecto
 * @param req
 * @param res
 * @param next
 */
async function updateRubro(req, res, next) {
    try {
        const project = req.body;
        const ProjectObject = JSON.parse(JSON.stringify(project));
        const {ProjectId, rubro, idRubro} = ProjectObject;
        const {file} = req.files;
        const factura = {
            name: file.name,
            data: file.data,
            path: '/img/uploads/' + file.name
        }
        const projectObj = await ProyectoDao.findOne({_id: ProjectId})
        projectObj.AgregarDetallesRubros.map(rubroActual => {
            if (String(rubroActual._id) === idRubro) {
                rubroActual.listaRubros.push({rubro, factura})
            }
        })

        ProyectoDao['update'](ProjectId, projectObj)
            .then(async _Proyecto => {
                if (!_Proyecto) {
                    res.status(404).json({message: 'Proyecto not found.'});
                } else {
                    res.status(200).json({"Proyecto": _Proyecto});
                }
            }).catch(err => res.status(500).json({message: err}));

    } catch (err) {
        const errorFormatter = ({msg, param}) => {
            return `The value: ${param} ${msg}`;
        };
        const result = validationResult(req).formatWith(errorFormatter);
        if (!result.isEmpty()) {
            return res.status(422).json({errors: result.array()});
        }
    }
}


function getIdConv(req, res) {
    let query = req.params.id;
    ProyectoDao['getAllId'](query)
        .then(async _Proyecto => {
            res.status(200).json({"Proyectos": _Proyecto});
        })
        .catch(err => {
            res.status(500).json({message: err});
        });
}

/**
 * Método para eliminar un Usuario
 * @param req
 * @param res
 * @param next
 */
function remove(req, res, next) {
    try {
        validationResult(req).throw();

        let ProyectoId = req.params.id;

        ProyectoDao['remove'](ProyectoId)
            .then(async Proyecto => {
                if (!Proyecto) {
                    res.status(404).json({message: 'Proyecto not found.'});
                } else {
                    res.status(200).json({message: 'Proyecto deleted.'});
                }
            })
            .catch(err => res.status(500).json({message: err}));
    } catch (err) {
        const errorFormatter = ({msg, param}) => {
            return `The value: ${param} ${msg}`;
        };
        const result = validationResult(req).formatWith(errorFormatter);
        if (!result.isEmpty()) {
            return res.status(422).json({errors: result.array()});
        }
    }
}


module.exports = {
    getAll,
    getById,
    create,
    getIdConv,
    update,
    updateRubro,
    removeRubro,
    remove,
};

