'use strict';


const _ = require('lodash');
const HonorarioSchema = require('../model/honorario.model');
const mongoose = require("mongoose");

/**
 * getAll users
 */
HonorarioSchema.static('getAll', async (query) => {
  try{
        return await HonorarioDao
          .find(query)
          .exec();
    }catch(err){
        throw err;
    }
});

/**
 * getById User
 */
HonorarioSchema.static('getById', async (id) => {

    try{
        return await HonorarioDao
          .findOne({_id: id})
          .exec();
    }catch (err){
        throw err;
    }
});

HonorarioSchema.static('conteo', async (honorarioId) => {

    try{
        return await HonorarioDao
          .findOne({honorarioId: honorarioId})
          .exec();
    }catch (err){
        throw err;
    }
});


/**
 * create User
 */
HonorarioSchema.static('create', async (user) => {
    if (typeof user !== 'object') {
        throw new TypeError('User is not a valid object.');
    }

    let _user = new HonorarioDao(user);
    let saved = await  _user.save();
    let __user = await HonorarioDao.findOne({_id: saved._id})
    return (__user);
});


/**
 * Update User
 */
HonorarioSchema.static('update', async (id, user) => {
    if (typeof user !== 'object') {
        throw new TypeError('User is not a valid object.');
    }

    try {
        return await HonorarioDao
          .findOneAndUpdate({_id: id}, user, {new: true})
          .exec();
    }catch (err){
        throw err;
    }
});


/**
 * Remove User
 */
HonorarioSchema.static('remove', async (id) =>{
    try{
        return await HonorarioDao.findOneAndRemove({_id: id}).exec();
    }catch (err){
        throw err;
    }
});

let HonorarioDao = mongoose.model('honorario', HonorarioSchema);
module.exports = HonorarioDao;
