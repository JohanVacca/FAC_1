const express = require('express');

let api = express.Router();
const instructivoController = require('../controller/instructivo.controller');
const path = require('path');
const multer = require('multer');
const endpoint = '/instructivos';
const Image = require('../model/intructivo.model')
const mongoose = require("mongoose");

const storage = multer.diskStorage({
  destination: (req,file,cb)=>{cb(null,path.join(__dirname,'../../instructivoPDF'))}
  , 
  filename:(req,file,cb)=>{
    cb(null,`${req.body.Codigo}.${file.mimetype.split('/')[1]}`);
  }
})

const uploader = multer({
  storage
})

api.get(endpoint, async (req,res)=>{
  const images = await instructivoDao.find().populate('User');
  res.json(images);
});

api.get(`${endpoint}/Pag/:page`, async (req,res)=>{
  let perPage = parseInt(req.params.page.split('-')[1]);
  let page = req.params.page.split('-')[0] || 1;

  const retor = await instructivoDao.find({Estado : 1}).populate('User')
  .skip((perPage * page) - perPage)
  .limit(perPage);
  res.json(retor)
})

api.get(`${endpoint}/Paginas`, async (req, res)=>{
  const retor = await instructivoDao.find({Estado : 1}).populate('User');
  res.json(retor.length);
 
});

api.patch(`${endpoint}/:id`, uploader.single('file'), instructivoController.update);
api.post(endpoint, uploader.single('file') , instructivoController.create);

let instructivoDao = mongoose.model('instructivo', Image);
module.exports = api;
