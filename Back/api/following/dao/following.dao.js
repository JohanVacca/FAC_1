'use strict';

const FollowingSchema = require('../model/following.model');
const mongoose = require("mongoose");

/**
 * getAll Followings
 */

FollowingSchema.static('getAll', async (query) => {
    const creates = { status: true };
    query = Object.assign({...query}, {...creates});

    try{
        return await FollowingDao.find(query)
          .populate('project')
          .exec();
    }catch(err){
        throw err;
    }
});

/**
 * getById Following
 */
FollowingSchema.static('getById', async (id) => {
    try{
        return await FollowingDao.findOne({_id: id})
          .populate({
            path: 'project',
            options: {populate: 'commander invLine invProgram invSubProgram invEndorser invType actiManager'}
          })
          .exec();
    }catch (err){
        throw err;
    }
});


/**
 * create a Following
 */
FollowingSchema.static('create', async (following) => {
    if (typeof following !== 'object') {
        throw new TypeError('following is not a valid object.');
    }

    let _following = new FollowingDao(following);
    let saved = await  _following.save();
    let __following = await FollowingDao.findOne({_id: saved._id})
      .populate({
        path: 'project',
        options: {populate: 'invLine invProgram invSubProgram invEndorser invType'}
      })
      .exec();
    return (__following);
});

/**
 * update a Following
 */
FollowingSchema.static('update', async (id, following) => {
    if (typeof following !== 'object') {
        throw new TypeError('following is not a valid object.');
    }

    try {
        return await FollowingDao.findOneAndUpdate({_id: id}, following, {new: true})
          .populate({
            path: 'project',
            options: {populate: 'invLine invProgram invSubProgram invEndorser invType'}
          })
          .exec();
    }catch (err){
        throw err;
    }
});


/**
 * remove a Following (logic)
 */
FollowingSchema.static('logicalRemove', async (id) =>{
  try{
    return await FollowingDao.findOneAndUpdate({_id: id}, { status: false}, {new: true})
      .exec();
  }catch (err){
    throw err;
  }
});

/**
 * remove a Following
 */
FollowingSchema.static('remove', async (id) =>{
    try{
        return await FollowingDao.findOneAndRemove({_id: id}).exec();
    }catch (err){
        throw err;
    }
});

// Get followings by commander
FollowingSchema.static('getAllByCommander', async (query, commanderId) => {

  return await FollowingDao.find(query) // TODO: revisar por que retorna project null
    .populate('project', null, { commander: { $ne: commanderId }})
    .exec();
});

// Get followings by acti manager
FollowingSchema.static('getAllByActiManager', async (query, actiManagerId) => {

  return await FollowingDao.find(query) // TODO: revisar por que retorna project null
    .populate('project', null, { actiManager: { $ne: actiManagerId }})
    .exec();
});

let FollowingDao = mongoose.model('following', FollowingSchema);
module.exports = FollowingDao;
