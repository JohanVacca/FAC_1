'use strict';


const _ = require('lodash');
const FirmaSchema = require('../model/firma.model');
const mongoose = require("mongoose");

/**
 * getById User
 */
FirmaSchema.static('getById', async (id) => {
    try{
        return await FirmaDao
            .findOne({userId: id})
            .select("-password")
            .populate('role')
            .exec();
    }catch (err){
        throw err;
    }
});

/**
 * Remove Firma
 */
FirmaSchema.static('remove', async (id) =>{
    try{
        return await FirmaDao.findOneAndRemove({userId: id}).exec();
    }catch (err){
        throw err;
    }
});

/**
 * create User
 */
FirmaSchema.static('create', async (firma) => {
    if (typeof firma !== 'object') {
        throw new TypeError('User is not a valid object.');
    }

    let _firma = new FirmaDao(firma);
    let saved = await  _firma.save();
    let _newFirma = await FirmaDao.findOne({_id: saved._id})
    return (_newFirma);
});

let FirmaDao = mongoose.model('Firma', FirmaSchema);
module.exports = FirmaDao;
