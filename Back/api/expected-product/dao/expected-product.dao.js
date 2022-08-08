'use strict';

const ExpectedProductSchema = require('../model/expected-product.model');
const mongoose = require("mongoose");

/**
 * getAll Groups
 */

ExpectedProductSchema.static('getAll', async (query) => {
    try{
        return await ExpectedProductDao
          .find(query)
          .populate('productType')
          .populate('entry')
          .exec();
    }catch(err){
        throw err;
    }
});

/**
 * getById ExpectedProduct
 */
ExpectedProductSchema.static('getById', async (id) => {
    try{
        return await ExpectedProductDao
          .findOne({_id: id})
          .populate('productType')
          .populate('entry')
          .exec();
    }catch (err){
        throw err;
    }
});


/**
 * create a ExpectedProduct
 */
ExpectedProductSchema.static('create', async (expectedProduct) => {
    if (typeof expectedProduct !== 'object') {
        throw new TypeError('expectedProduct is not a valid object.');
    }

    let _position = new ExpectedProductDao(expectedProduct);
    let saved = await  _position.save();
    let __position = await ExpectedProductDao
      .findOne({_id: saved._id})
      .populate('productType')
      .populate('entry')
      .exec();
    return (__position);
});

/**
 * update a ExpectedProduct
 */
ExpectedProductSchema.static('update', async (id, expectedProduct) => {
    if (typeof expectedProduct !== 'object') {
        throw new TypeError('expectedProduct is not a valid object.');
    }

    try {
        return await ExpectedProductDao
          .findOneAndUpdate({_id: id}, expectedProduct, {new: true})
          .populate('productType')
          .populate('entry')
          .exec();
    }catch (err){
        throw err;
    }
});

/**
 * remove a ExpectedProduct
 */
ExpectedProductSchema.static('remove', async (id) =>{
    try{
        return await ExpectedProductDao.findOneAndRemove({_id: id}).exec();
    }catch (err){
        throw err;
    }
});

let ExpectedProductDao = mongoose.model('expectedProduct', ExpectedProductSchema);
module.exports = ExpectedProductDao;
