'use strict';

const GroupCategorySchema = require('../model/group-category.model');
const mongoose = require("mongoose");

/**
 * getAll GroupCategory
 */

GroupCategorySchema.static('getAll', async (query) => {
    try{
        return await GroupCategoryDao.find(query).populate('Convocatoria').exec();
    }catch(err){
        throw err;
    }
});

/**
 * getById GroupCategory
 */
GroupCategorySchema.static('getById', async (id) => {
    try{
        return await GroupCategoryDao.findOne({_id: id}).populate('Convocatoria').exec();
    }catch (err){
        throw err;
    }
});

GroupCategorySchema.static('getAllId', async (id) => {
    try{
        return await GroupCategoryDao.find({Convocatoria: id}).populate('Convocatoria').exec();
    }catch (err){
        throw err;
    }
});

/**
 * create a GroupCategory
 */
GroupCategorySchema.static('create', async (groupCategory) => {
    if (typeof groupCategory !== 'object') {
        throw new TypeError('groupCategory is not a valid object.');
    }

    let _obj = new GroupCategoryDao(groupCategory);
    let saved = await  _obj.save();
    let __obj = await GroupCategoryDao.findOne({_id: saved._id}).populate('Convocatoria')
        .exec();
    return (__obj);
});

/**
 * update a GroupCategory
 */
GroupCategorySchema.static('update', async (id, groupCategory) => {
    if (typeof groupCategory !== 'object') {
        throw new TypeError('groupCategory is not a valid object.');
    }

    try {
        return await GroupCategoryDao.findOneAndUpdate({_id: id}, groupCategory, {new: true}).populate('Convocatoria').exec();
    }catch (err){
        throw err;
    }
});

/**
 * remove a GroupCategory
 */
GroupCategorySchema.static('remove', async (id) =>{
    try{
        return await GroupCategoryDao.findOneAndRemove({_id: id}).exec();
    }catch (err){
        throw err;
    }
});

let GroupCategoryDao = mongoose.model('groupCategory', GroupCategorySchema);
module.exports = GroupCategoryDao;
