'use strict';

const PropiedadintSchema = require('../model/propiedadint.model');
const mongoose = require("mongoose");

/**
 * create a propiedadint
 */
 PropiedadintSchema.static('create', async (propiedad) => {
    // console.log("Imprimiendo objObj:");
    // console.log(propiedad);
    // console.log("//////////////////////////////");
    if (typeof propiedad !== 'object') {
        throw new TypeError('propiedadint is not a valid object.');
    }

    let _obj = new PropiedadintDao(propiedad);
    let saved = await  _obj.save();
    let __obj = await PropiedadintDao.findOne({_id: saved._id})
    .populate('cronograma')
    .populate('proyecto')
    .exec();
    return (__obj);
});

/**
 * getAll propiedadints
 */

 PropiedadintSchema.static('getAll', async (query) => {
    try{
        return await PropiedadintDao
            .find(query)
            .populate(['cronograma','proyecto']) //Consulta en las otras tablas para traer los objetos y poder retornar sus enlaces
            .exec();
    }catch(err){
        throw err;
    }
})

/**
 * remove propiedadint
 */
 PropiedadintSchema.static('remove', async (id) =>{
    try{
        return await PropiedadintDao.findOneAndRemove({_id: id}).exec();
    }catch (err){
        throw err;
    }
});

let PropiedadintDao = mongoose.model('propiedadint', PropiedadintSchema);
module.exports = PropiedadintDao;