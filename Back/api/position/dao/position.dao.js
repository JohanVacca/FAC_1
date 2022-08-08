'use strict';

const _ = require('lodash');
const PositionSchema = require('../model/position.model');
const mongoose = require("mongoose");

/**
 * getAll Positions
 */

PositionSchema.static('getAll', async (query) => {
    try{
        return await PositionDao.find(query).exec();
    }catch(err){
        throw err;
    }
});

/**
 * getById Position
 */
PositionSchema.static('getById', async (id) => {
    try{
        return await PositionDao.findOne({_id: id}).exec();
    }catch (err){
        throw err;
    }
});


/**
 * create a Position
 */
PositionSchema.static('create', async (position) => {
    if (typeof position !== 'object') {
        throw new TypeError('position is not a valid object.');
    }

    let _position = new PositionDao(position);
    let saved = await  _position.save();
    let __position = await PositionDao.findOne({_id: saved._id})
        .exec();
    return (__position);
});

/**
 * update a Position
 */
PositionSchema.static('update', async (id, position) => {
    if (typeof position !== 'object') {
        throw new TypeError('position is not a valid object.');
    }

    try {
        return await PositionDao.findOneAndUpdate({_id: id}, position, {new: true}).exec();
    }catch (err){
        throw err;
    }
});

/**
 * remove a Position
 */
PositionSchema.static('remove', async (id) =>{
    try{
        return await PositionDao.findOneAndRemove({_id: id}).exec();
    }catch (err){
        throw err;
    }
});

let PositionDao = mongoose.model('position', PositionSchema);
module.exports = PositionDao;
