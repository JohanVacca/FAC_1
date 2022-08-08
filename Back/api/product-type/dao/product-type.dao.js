'use strict';

const ProductTypeSchema = require('../model/product-type.model');
const mongoose = require("mongoose");

/**
 * getAll ProductTypes
 */

ProductTypeSchema.static('getAll', async (query) => {
    try{
        return await ProductTypeDao
            .find(query)
            .select("-password")
            .populate('Convocatoria')
            .exec();
    }catch(err){
        throw err;
    }
});

/**
 * getById ProductType
 */
ProductTypeSchema.static('getById', async (id) => {
    try{
        return await ProductTypeDao
            .findOne({_id: id})
            .select("-password")
            .populate('Convocatoria')
            .exec();
    }catch (err){
        throw err;
    }
});

ProductTypeSchema.static('getAllId', async (id) => {
    try{
        return await ProductTypeDao.find({Convocatoria: id}).populate('Convocatoria').exec();
    }catch (err){
        throw err;
    }
});

/**
 * create a ProductType
 */
ProductTypeSchema.static('create', async (productType) => {
    if (typeof productType !== 'object') {
        throw new TypeError('productType is not a valid object.');
    }

    let _position = new ProductTypeDao(productType);
    let saved = await  _position.save();
    let __position = await ProductTypeDao.findOne({_id: saved._id})
        .populate('Convocatoria')
        .exec();
    return (__position);
});

/**
 * update a ProductType
 */
ProductTypeSchema.static('update', async (id, productType) => {
    if (typeof productType !== 'object') {
        throw new TypeError('productType is not a valid object.');
    }

    try {
        return await ProductTypeDao.findOneAndUpdate({_id: id}, productType, {new: true})
            .populate('Convocatoria')
            .exec();
    }catch (err){
        throw err;
    }
});

/**
 * remove a ProductType
 */
ProductTypeSchema.static('remove', async (id) =>{
    try{
        return await ProductTypeDao.findOneAndRemove({_id: id}).exec();
    }catch (err){
        throw err;
    }
});

let ProductTypeDao = mongoose.model('productType', ProductTypeSchema);
module.exports = ProductTypeDao;
