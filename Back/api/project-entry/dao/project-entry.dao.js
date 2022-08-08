'use strict';

const ProjectEntrySchema = require('../model/project-entry.model');
const mongoose = require("mongoose");

/**
 * getAll ProjectEntries
 */

ProjectEntrySchema.static('getAll', async (query) => {
    try{
        return await ProjectEntryDao.find(query).populate('Convocatoria').exec();
    }catch(err){
        throw err;
    }
});

/**
 * getById ProjectEntry
 */
ProjectEntrySchema.static('getById', async (id) => {
    try{
        return await ProjectEntryDao.findOne({_id: id}).populate('Convocatoria').exec();
    }catch (err){
        throw err;
    }
});

ProjectEntrySchema.static('getAllId', async (id) => {
    try{
        return await ProjectEntryDao.find({Convocatoria: id}).populate('Convocatoria').exec();
    }catch (err){
        throw err;
    }
});

/**
 * create a ProjectEntry
 */
ProjectEntrySchema.static('create', async (projectEntry) => {
    if (typeof projectEntry !== 'object') {
        throw new EntryError('projectEntry is not a valid object.');
    }

    let _position = new ProjectEntryDao(projectEntry);
    let saved = await  _position.save();
    let __position = await ProjectEntryDao.findOne({_id: saved._id})
        .populate('Convocatoria')
        .exec();
    return (__position);
});

/**
 * update a ProjectEntry
 */
ProjectEntrySchema.static('update', async (id, projectEntry) => {
    if (typeof projectEntry !== 'object') {
        throw new EntryError('projectEntry is not a valid object.');
    }

    try {
        return await ProjectEntryDao.findOneAndUpdate({_id: id}, projectEntry, {new: true})
            .populate('Convocatoria')
            .exec();
    }catch (err){
        throw err;
    }
});

/**
 * remove a ProjectEntry
 */
ProjectEntrySchema.static('remove', async (id) =>{
    try{
        return await ProjectEntryDao.findOneAndRemove({_id: id}).exec();
    }catch (err){
        throw err;
    }
});

let ProjectEntryDao = mongoose.model('projectEntry', ProjectEntrySchema);
module.exports = ProjectEntryDao;

ProjectEntryDao.find({descr:'Personal Cientifico'}, function callback(error, a) {
    if(a[0]==null){
        var Rubro1 = new ProjectEntryDao({ descr: 'Personal Cientifico', Convocatoria:'123456789876543212345678'});
        var Rubro2 = new ProjectEntryDao({ descr: 'Servicios Tecnicos', Convocatoria:'123456789876543212345678'});
        var Rubro3 = new ProjectEntryDao({ descr: 'Equipos', Convocatoria:'123456789876543212345678'});
        var Rubro4 = new ProjectEntryDao({ descr: 'Materiales e Insumos', Convocatoria:'123456789876543212345678'});
        var Rubro5 = new ProjectEntryDao({ descr: 'Adecuacion de Infraestructura', Convocatoria:'123456789876543212345678'});
        var Rubro6 = new ProjectEntryDao({ descr: 'Software', Convocatoria:'123456789876543212345678'});
        var Rubro7 = new ProjectEntryDao({ descr: 'Salidas de Campo', Convocatoria:'123456789876543212345678'});
        var Rubro8 = new ProjectEntryDao({ descr: 'Eventos Academicos', Convocatoria:'123456789876543212345678'});
        var Rubro9 = new ProjectEntryDao({ descr: 'Publicaciones', Convocatoria:'123456789876543212345678'});
        var Rubro10 = new ProjectEntryDao({ descr: 'Gastos de propiedad intelectual', Convocatoria:'123456789876543212345678'});
        var Rubro12 = new ProjectEntryDao({ descr: 'bibleografia', Convocatoria:'123456789876543212345678'});
        var Rubro13 = new ProjectEntryDao({ descr: 'Gastos Operativos y/o Administrativos', Convocatoria:'123456789876543212345678'});
        var Rubro14 = new ProjectEntryDao({ descr: 'Seguimiento y divulgacion', Convocatoria:'123456789876543212345678'});
        var Rubro15 = new ProjectEntryDao({ descr: 'Apoyo logistico', Convocatoria:'123456789876543212345678'});
        var Rubro16 = new ProjectEntryDao({ descr: 'Capacitaciones', Convocatoria:'123456789876543212345678'});
        var Rubro17 = new ProjectEntryDao({ descr: 'Membresias a sociedades cientificas', Convocatoria:'123456789876543212345678'});
        var Rubro18 = new ProjectEntryDao({ descr: 'Certificaciones', Convocatoria:'123456789876543212345678'});
        var Rubro19 = new ProjectEntryDao({ descr: 'Otros', Convocatoria:'123456789876543212345678'});
        
        Rubro1.save();
        Rubro2.save();
        Rubro3.save();
        Rubro4.save();
        Rubro5.save();
        Rubro6.save();
        Rubro7.save();
        Rubro8.save();
        Rubro9.save();
        Rubro10.save();
        Rubro12.save();
        Rubro13.save();
        Rubro14.save();
        Rubro15.save();
        Rubro16.save();
        Rubro17.save();
        Rubro18.save();
        Rubro19.save();
    }
});