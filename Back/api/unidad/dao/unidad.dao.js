'use strict';

const UnidadSchema = require('../model/unidad.model');
const mongoose = require("mongoose");

/**
 * getAll unidad
 */

UnidadSchema.static('getAll', async (query) => {
    try{
        return await UnidadDao
            .find(query)
            .populate(['rResponsable','comandante'])
            .exec();
    }catch(err){
        throw err;
    }
});

/**
 * create a unidad
 */
UnidadSchema.static('create', async (unidad) => {
    if (typeof unidad !== 'object') {
        throw new TypeError('unidad is not a valid object.');
    }

    let _obj = new UnidadDao(unidad);
    let saved = await  _obj.save();
    let __obj = await UnidadDao.findOne({_id: saved._id}).exec();
    return (__obj);
});


/**
 * remove a unidad
 */
UnidadSchema.static('remove', async (id) =>{
    try{
        return await UnidadDao.findOneAndRemove({_id: id}).exec();
    }catch (err){
        throw err;
    }
});

UnidadSchema.static('getByResponsable', async (userId) => {
    try{
        return await UnidadDao
            .findOne({rResponsable: userId})
            .exec();
    }catch(err){
        throw err;
    }
});

let UnidadDao = mongoose.model('unidad', UnidadSchema);
module.exports = UnidadDao;
