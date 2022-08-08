'use strict';


const _ = require('lodash');
const ProyectoSchema = require('../model/project.model');
const mongoose = require("mongoose");

/**
 * getAll users
 */
ProyectoSchema.static('getAll', async (query) => {
    try {
        return await ProyectoDao
            .find(query)
            .populate('UserId')
            .populate('Convocatoria')
            .populate('iniciarProyecto.comandante')
            .populate('calificaciones.idEv')
            .exec();
    } catch (err) {
        throw err;
    }
});

/**
 * getById User
 */
ProyectoSchema.static('getById', async (id) => {

    try {
        return await ProyectoDao
            .findOne({_id: id})
            .populate('UserId')
            .populate('Convocatoria')
            .populate('iniciarProyecto.comandante')
            .populate('calificaciones.idEv')
            .exec();
    } catch (err) {
        throw err;
    }
});

/**
 * find User by Email
 */
ProyectoSchema.static('getByEmail', async (email) => {

    try {
        return await ProyectoDao
            .findOne({email: email})
            .populate('UserId')
            .populate('Convocatoria')
            .populate('comandante')
            .populate('idEv')
            .exec();
    } catch (err) {
        throw err;
    }
});

/**
 * create User
 */
ProyectoSchema.static('create', async (project) => {
    if (typeof project !== 'object') {
        throw new TypeError('User is not a valid object.');
    }

    const date = new Date();
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth();

    const user = {
        ...project,
        date: `${day}-${month + 1}-${year}`
    }

    let _user = new ProyectoDao(user);
    let saved = await _user.save();
    let __user = await ProyectoDao.findOne({_id: saved._id})
        .populate('UserId')
        .populate('Convocatoria')
        .populate('comandante')
        .populate('idEv')
    return (__user);
});

ProyectoSchema.static('getAllId', async (id) => {
    try {
        return await ProyectoDao.find({Convocatoria: id})
            .populate('UserId')
            .populate('Convocatoria')
            .populate('comandante')
            .populate('idEv')
            .exec();
    } catch (err) {
        throw err;
    }
});

/**
 * Update User
 */
ProyectoSchema.static('update', async (id, project) => {

    if (typeof project !== 'object') {
        throw new TypeError('User is not a valid object.');
    }

    try {
        return await ProyectoDao
            .findOneAndUpdate({_id: id}, project,
                {new: true})
            .populate('UserId')
            .populate('Convocatoria')
            .populate('iniciarProyecto.comandante')
            .exec();
    } catch (err) {
        throw err;
    }
});


/**
 * Remove User
 */
ProyectoSchema.static('remove', async (id) => {
    try {
        return await ProyectoDao.findOneAndRemove({_id: id})
            .populate('UserId')
            .populate('Convocatoria')
            .populate('comandante')
            .exec();
    } catch (err) {
        throw err;
    }
});

let ProyectoDao = mongoose.model('Proyecto', ProyectoSchema);
module.exports = ProyectoDao;
