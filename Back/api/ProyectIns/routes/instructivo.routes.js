const express = require('express');

let api = express.Router();
const ProyectInsController = require('../controller/instructivo.controller');
const path = require('path');
const multer = require('multer');
const endpoint = '/ProyectIns';
const Image = require('../model/intructivo.model')
const mongoose = require("mongoose");
const fs = require('fs');
const { count } = require('../dao/instructivo.dao');
const { nextTick } = require('process');

const storage = multer.diskStorage({
  destination: (req,file,cb)=>{cb(null,path.join(__dirname,'../PDF'))}
  , 
  filename:(req,file,cb)=>{
    cb(null,`${req.body.NombreTipo}${req.body.CodigoPr}.${file.mimetype.split('/')[1]}`);
  }
})

const uploader = multer({
  storage
})

api.get(`${endpoint}/getIdProyec/:id`, ProyectInsController.getIdConv);

api.get(endpoint, async (req,res)=>{
  const images = await ProyectInsDao.find().populate('CodigoPr');
  res.json(images);
});


api.patch(`${endpoint}/:id`, uploader.single('file'), ProyectInsController.update);
api.post(endpoint, uploader.single('file') , ProyectInsController.create);
api.delete(`${endpoint}/:id`, ProyectInsController.remove);

let ProyectInsDao = mongoose.model('ProyectIns', Image);
module.exports = api;
