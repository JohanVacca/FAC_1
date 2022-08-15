'use strict';

const NecesidadSchema = require('../model/necesidad.model');
const mongoose = require("mongoose");


/**
 * getAll necesidad
 */


NecesidadSchema.static('getAll', async (query) => {
    try{
        return await NecesidadDao
            .find(query)
            .exec();
    }catch(err){
        throw err;
    }
})


/**
 * create a necesidad
 */
NecesidadSchema.static('create', async (necesidad) => {
    if (typeof necesidad !== 'object') {
        throw new TypeError('necesidad is not a valid object.');
    }

    let _obj = new NecesidadDao(necesidad);
    let saved = await  _obj.save();
    let __obj = await NecesidadDao.findOne({_id: saved._id})
    .populate('unidad') //se llama igual que en el modelo de necesidad
    .exec();
    return (__obj);
});


/**
 * remove a necesidad
 */
NecesidadSchema.static('remove', async (id) =>{
    try{
        return await NecesidadDao.findOneAndRemove({_id: id}).exec();
    }catch (err){
        throw err;
    }
});
/**
 * patch a necesidad
 */
 NecesidadSchema.static('update', async (id, necesidadbody) => {
    try {
        if (typeof necesidadbody !== 'object') {
            throw new TypeError('Necesidad no es un Objeto');
        }
        return await NecesidadDao.findOneAndUpdate({_id: id}, necesidadbody,{new: true}).exec(); //Le pasamos los parametros con req.params, procurar llamar al lado izq. tal y como en la DB
    } catch (error) {
        throw error;
    }
})


/**
 * getbyid a necesidad
 */
NecesidadSchema.static('getById', async (id) => {
    try {
        return await NecesidadDao.findOne({_id: id}).exec(); //Obtenemos necesidad por ID dado gracias a params
    } catch (err) {
        throw err;
    }
});
let NecesidadDao = mongoose.model('necesidad', NecesidadSchema);
module.exports = NecesidadDao;
