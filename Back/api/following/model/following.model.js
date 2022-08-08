'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let FollowingSchema = new Schema({
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    project: { index: {unique: true}, type: mongoose.Schema.Types.ObjectId, ref: 'project'},
    status: { type: Boolean, default: true }, // for logic rmv
    attachedFiles: {
      partialReportFiles: Array,
      servicesFiles: Array,
      others: Array,
    },
    partialReportCommanderSignaturePath: String,
    partialReportInvestigatorSignaturePath: String,
    partialReportAttachedFiles: Array,
    signatures: [
      {
        path: String,
        position: Number,
        name: String,
        uniqueName: { type: String, unique: true},
        uploaded: Boolean,
        allowedRole: [{type: mongoose.Schema.Types.ObjectId, ref: 'role'}]
      }
    ],
    partialReportTasks: [
      {
        description: String,
        estimatedEndDate: Date,
        realEndDate: Date,
        gap: Number,
        progress: Number
      }
    ],
    pdfPath: String,
    partialReportValidations: [
      {
        description: String,
        checked: Boolean
      }
    ],
    partialReportEntries: [
      {
        entryId: String,
        descr: String,
        total: Number,
        executed: Number,
        pct: Number,
      }
    ],
    partialReportModifications: [
      {
        modificationType: Number,
        otherDescr: String,
        modifyDescr: String,
        justification: String,
        approvalStatus: Number,
        approvedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
      }
    ]
},
  {
    timestamps: true
  });
module.exports =  FollowingSchema;
