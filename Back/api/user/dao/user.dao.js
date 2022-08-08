'use strict';

const UserSchema = require('../model/user.model');
const mongoose = require("mongoose");

/**
 * getAll users
 */
UserSchema.static('getAll', async (query) => {
  try{
        return await UserDao
          .find(query)
          .select("-password")
          .populate('role')
          .exec();
    }catch(err){
        throw err;
    }
});

/**
 * getCorr user
 */
UserSchema.static('getCorr', async (query) => {
    try{
          return await UserDao
            .find({email: query})
            .populate('role')
            .exec();
      }catch(err){
          throw err;
      }
  });

/**
 * getById User
 */
UserSchema.static('getById', async (id) => {

    try{
        return await UserDao
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
UserSchema.static('getByEmail', async (email) => {

    try{
        return await UserDao
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
UserSchema.static('create', async (user) => {
    if (typeof user !== 'object') {
        throw new TypeError('User is not a valid object.');
    }

    let _user = new UserDao(user);
    let saved = await  _user.save();
    let __user = await UserDao.findOne({_id: saved._id})
        .populate('role')
        .exec();
    return (__user);
});

/**
 * Update User
 */
UserSchema.static('update', async (id, user) => {
    if (typeof user !== 'object') {
        throw new TypeError('User is not a valid object.');
    }

    try {
        return await UserDao
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
UserSchema.static('remove', async (id) =>{
    try{
        return await UserDao.findOneAndRemove({_id: id}).exec();
    }catch (err){
        throw err;
    }
});

let UserDao = mongoose.model('User', UserSchema);
module.exports = UserDao;
