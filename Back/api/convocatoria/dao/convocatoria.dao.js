'use strict';


const _ = require('lodash');
const ConvocatoriaSchema = require('../model/convocatoria.model');
const mongoose = require("mongoose");

/**
 * getAll users
 */
ConvocatoriaSchema.static('getAll', async (query) => {
  try{
        return await ConvocatoriaDao
          .find(query)
          .select("-password")
          .populate('role')
          .exec();
    }catch(err){
        throw err;
    }
});

/**
 * getById User
 */
ConvocatoriaSchema.static('getById', async (id) => {

    try{
        return await ConvocatoriaDao
          .findOne({_id: id})
          .select("-password")
          .populate('role')
          .exec();
    }catch (err){
        throw err;
    }
});

/**
 * find User by Email
 */
ConvocatoriaSchema.static('getByEmail', async (email) => {

    try{
        return await ConvocatoriaDao
          .findOne({email: email})
          .populate('role')
          .exec();
    }catch (err){
        throw err;
    }
});

/**
 * create User
 */
ConvocatoriaSchema.static('create', async (user) => {
    if (typeof user !== 'object') {
        throw new TypeError('User is not a valid object.');
    }

    let _user = new ConvocatoriaDao(user);
    let saved = await  _user.save();
    let __user = await ConvocatoriaDao.findOne({_id: saved._id})
    return (__user);
});


/**
 * Update User
 */
ConvocatoriaSchema.static('update', async (id, user) => {
    if (typeof user !== 'object') {
        throw new TypeError('User is not a valid object.');
    }

    try {
        return await ConvocatoriaDao
          .findOneAndUpdate({_id: id}, user, {new: true})
          .select("-password")
          .populate('role')
          .exec();
    }catch (err){
        throw err;
    }
});


/**
 * Remove User
 */
ConvocatoriaSchema.static('remove', async (id) =>{
    try{
        return await ConvocatoriaDao.findOneAndRemove({_id: id}).exec();
    }catch (err){
        throw err;
    }
});

let ConvocatoriaDao = mongoose.model('Convocatoria', ConvocatoriaSchema);
module.exports = ConvocatoriaDao;
