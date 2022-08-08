'use strict';

const InvCenterSchema = require('../model/inv-center.model');
const mongoose = require("mongoose");

/**
 * getAll InvCenter
 */

InvCenterSchema.static('getAll', async (query) => {
    try{
        return await InvCenterDao
            .find(query)
            .exec();
    }catch(err){
        throw err;
    }
});

/**
 * create a InvCenter
 */
InvCenterSchema.static('create', async (invCenter) => {
    if (typeof invCenter !== 'object') {
        throw new TypeError('invType is not a valid object.');
    }

    let _obj = new InvCenterDao(invCenter);
    let saved = await  _obj.save();
    let __obj = await InvCenterDao.findOne({_id: saved._id}).exec();
    return (__obj);
});

/**
 * create a InvCenter
 */
InvCenterSchema.static('update', async (id, invCenter) => {
    if (typeof invCenter !== 'object') {
        throw new TypeError('User is not a valid object.');
    }

    try {
        return await InvCenterDao
            .findOneAndUpdate({_id: id}, invCenter, {new: true})
            .exec();
    }catch (err){
        throw err;
    }
});


/**
 * remove a InvCenter
 */
InvCenterSchema.static('remove', async (id) =>{
    try{
        return await InvCenterDao.findOneAndRemove({_id: id}).exec();
    }catch (err){
        throw err;
    }
});

let InvCenterDao = mongoose.model('invCenter', InvCenterSchema);
module.exports = InvCenterDao;
