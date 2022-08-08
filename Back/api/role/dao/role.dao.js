'use strict';

const _ = require('lodash');
const RoleSchema = require('../model/role.model');
const mongoose = require("mongoose");

/**
 * getAll Roles
 */

RoleSchema.static('getAll', async (query) => {
    try{
        return await RoleDao.find(query).exec();
    }catch(err){
        throw err;
    }
});

/**
 * getById Role
 */
RoleSchema.static('getById', async (id) => {
    try{
        return await RoleDao.findOne({_id: id}).exec();
    }catch (err){
        throw err;
    }
});


/**
 * create a Role
 */
RoleSchema.static('create', async (role) => {
    if (typeof role !== 'object') {
        throw new TypeError('role is not a valid object.');
    }

    let _role = new RoleDao(role);
    let saved = await  _role.save();
    let __role = await RoleDao.findOne({_id: saved._id})
        .exec();
    return (__role);
});

/**
 * update a Role
 */
RoleSchema.static('update', async (id, role) => {
    if (typeof role !== 'object') {
        throw new TypeError('role is not a valid object.');
    }

    try {
        return await RoleDao.findOneAndUpdate({_id: id}, role, {new: true}).exec();
    }catch (err){
        throw err;
    }
});

/**
 * remove a Role
 */
RoleSchema.static('remove', async (id) =>{
    try{
        return await RoleDao.findOneAndRemove({_id: id}).exec();
    }catch (err){
        throw err;
    }
});

/**
 * get default role
 */
RoleSchema.static('getDefaultRole', async () => {
  try{
    return await RoleDao.findOne({name: 'Investigador'}).exec();
  }catch (err){
    throw err;
  }
});


let RoleDao = mongoose.model('role', RoleSchema);
module.exports = RoleDao;

RoleDao.find({name:'Administrador'}, function callback(error, a) {
    if(a[0]==null){
        var role1 = new RoleDao({ name: 'Administrador', description:'' });
        var role2 = new RoleDao({ name: 'Investigador', description:'' });
        var role3 = new RoleDao({ name: 'Evaluador', description:'' });
        var role4 = new RoleDao({ name: 'Comandante', description:'' });
        var role5 = new RoleDao({ name: 'Sub-Director', description:'' });
        var role6 = new RoleDao({ name: 'Director', description:'' });
        var role7 = new RoleDao({ name: 'Jefe De Centro', description:'' });
        var role8 = new RoleDao({ name: 'Responsable', description:'' });
        role1.save();
        role2.save();
        role3.save();
        role4.save();
        role5.save();
        role6.save();
        role6.save();
        role7.save();
        role8.save();
    }
});

