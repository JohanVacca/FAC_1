'use strict';
const pdf = require('html-pdf');
const FollowingDao = require('../dao/following.dao');
const RoleDao = require('../../role/dao/role.dao');
const InvTeamPersonDao = require('../../inv-team-person/dao/inv-team-person.dao');
const GroupDao = require('../../group/dao/group.dao');
const ProjectHtml = require('../../project/pdfs/project-html');
const { check, validationResult } = require('express-validator/check');
const rootPath = 'public/files/';
const FollowingPartialReportHtml = require('../pdfs/following-partial-report-html');
const FollowingServicesHtml = require('../pdfs/following-services-html');
const fs = require('fs');
const {setupPartialReportValidations,addApproverInModifications,calculateEntriesPct, validateTasks, getQueryWithUserId, setupSignatures, validateSignatures} = require('../following.service');

const { generatePdf } = require('../pdfs/partial-report-pdf');

const config = {
  "format": "Letter",
  "border": {
    "top": "24px",
    "right": "24px",
    "bottom": "24px",
    "left": "24px"
  },
  "header": {
    "height": "50px",
  },
  "footer": {
    "height": "80px",
  },
  "base" : 'file:///app/'
};

/**
 * getAll Followings
 * @param req
 * @param res
 * @param next
 */
function getAll(req, res, next) {
  try {
    validationResult(req).throw();

    const query = req.query;
    const {commanderId, actiManagerId, ..._query} = req.query;

    if (commanderId !== undefined) {
      FollowingDao['getAllByCommander'](_query, commanderId)
        .then(async followings =>{
          res.status(200).json({"followings": followings});
        })
        .catch(err => {
          res.status(500).json({message: err});
        });
    } else if(actiManagerId !== undefined) {
      FollowingDao['getAllByActiManager'](_query, actiManagerId)
        .then(async followings =>{
          res.status(200).json({"followings": followings});
        })
        .catch(err => {
          res.status(500).json({message: err});
        });
    } else  {
      FollowingDao['getAll'](query)
        .then(async followings =>{
          res.status(200).json({"followings": followings});
        })
        .catch(err => {
          res.status(500).json({message: err});
        });
    }

  } catch (err){
    const errorFormatter = ({ msg, param }) => {
      return `The value: ${param} ${msg}`;
    };
    const result = validationResult(req).formatWith(errorFormatter);
    if(!result.isEmpty()){
      return res.status(422).json({ errors: result.array() });
    }
  }
}

/**
 * getById Following
 * @param req
 * @param res
 * @param next
 */
function getById(req, res, next) {
    try{
        validationResult(req).throw();

        let projectId = req.params.id;

        FollowingDao['getById'](projectId)
            .then(async following =>{
                if(!following){
                    res.status(404).json({message: 'following not found.'});
                }else {
                    res.status(200).json({"following": following});
                }
            })
            .catch(err => {
                res.status(500).json({message: err});
            });
    }catch (err){
        const errorFormatter = ({ msg, param }) => {
            return `The value: ${param} ${msg}`;
        };
        const result = validationResult(req).formatWith(errorFormatter);
        if(!result.isEmpty()){
            return res.status(422).json({ errors: result.array() });
        }
    }
}

/**
 * create a Following
 * @param req
 * @param res
 * @param next
 */
async function create(req, res, next) {

  try {
      validationResult(req).throw();

      const { createdBy } = getQueryWithUserId(req, res);

      let following = req.body;

      RoleDao['getAll']()
        .then(async roles => {

          try {
            following.signatures = setupSignatures(roles);
            following.partialReportValidations = setupPartialReportValidations();
            following.createdBy = createdBy;
          }catch (e) {
            res.status(500).json({message: JSON.stringify(e)});
          }

          FollowingDao['create'](following)
            .then(async _following =>{
              res.status(201).json({"following": _following});
            }).catch(err => {
            if(err.code === 11000){
              res.status(409).json({message: "following already exists."});
            }{
              res.status(500).json({message: err});
            }
          });
        });

    } catch (err){
    const errorFormatter = ({ msg, param }) => {
            return `The value: ${param} ${msg}`;
        };
        const result = validationResult(req).formatWith(errorFormatter);
        if(!result.isEmpty()){
            return res.status(422).json({ errors: result.array() });
        }
    }
}

/**
 * update a Following
 * @param req
 * @param res
 * @param next
 */
function update(req, res, next) {
    try {
        validationResult(req).throw();

        try {
          let following = JSON.parse(JSON.stringify(req.body));
          let followingId = req.params.id;
          
          if (following.signatures){
            let signatures = validateSignatures(following);
            following.signatures = [...signatures];
          }

          if(following.partialReportTasks) {
            let tasks = validateTasks(following);
            following.partialReportTasks = [...tasks];
          }
          
          if(following.partialReportEntries) {
            let entries = calculateEntriesPct(following);
            following.partialReportEntries = [...entries];
          }
          
          if (following.partialReportModifications) {
            const { createdBy: userId } = getQueryWithUserId(req, res);
            let modifications = addApproverInModifications(following, userId);
            following.partialReportModifications = [...modifications];
          }

          FollowingDao['update'](followingId, following)
            .then(async _following =>{
              if(!_following){
                res.status(404).json({message: 'following not found.'});
              }else {
                res.status(200).json({"following": _following});
              }
            }).catch(err => res.status(500).json({message: err}));
        } catch (e) {
          console.log(e)
        }

    }catch (err){
        const errorFormatter = ({ msg, param }) => {
            return `The value: ${param} ${msg}`;
        };
        const result = validationResult(req).formatWith(errorFormatter);
        if(!result.isEmpty()){
            return res.status(422).json({ errors: result.array() });
        }
    }
}

/**
 * delete Following
 * @param req
 * @param res
 * @param next
 */
function remove(req, res, next) {
    try{
        validationResult(req).throw();

        let projectId = req.params.id;

        FollowingDao['logicalRemove'](projectId)
            .then(async following =>{
                if(!following){
                    res.status(404).json({message: 'following not found.'});
                }else {
                    res.status(200).json({message: 'following deleted.'});
                }
            })
            .catch(err => res.status(500).json({message: err}));
    }catch (err){
        const errorFormatter = ({ msg, param }) => {
            return `The value: ${param} ${msg}`;
        };
        const result = validationResult(req).formatWith(errorFormatter);
        if(!result.isEmpty()){
            return res.status(422).json({ errors: result.array() });
        }
    }
}

/**
 * Upload File
 * @param req
 * @param res
 * @param next
 */
function uploadFile(req, res, next) {
  if (Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  try {
    const followingId = req.params.id;
    const {type} = req.query;
    const followingFile = req.files.projectFile;
    let fileName;
    let dir;

    switch (type) {
      case 'isPartialReport':
        fileName = `${followingId}-partial-report-${followingFile.name}`;
        dir = `${rootPath}followings/${followingId}/assets/partial-report`;
        break;
      case 'isService':
        fileName = `${followingId}-services-${followingFile.name}`;
        dir = `${rootPath}followings/${followingId}/assets/services`;
        break;
      default:
        fileName = `${followingId}-${followingFile.name}`;
        dir = `${rootPath}followings/${followingId}/assets/others`;
    }

    if (!fs.existsSync(dir)){
      fs.mkdirSync(dir, { recursive: true });
    }

    const filePath = `${dir}/${fileName}`;
    followingFile.mv(filePath, function(err) {
      if (err) {
        return res.status(500).send(err);
      }

      res.send({'filePath': filePath});
    });
  } catch (e) {
    return res.status(400).send('Invalid file name');
  }
}


/**
 * Generate pdf
 * @param req
 * @param res
 * @param next
 */
async  function getByIdInPdf(req, res, next) {
  try{
    validationResult(req).throw();

    let followingId = req.params.id;
    try {
      const following = await FollowingDao['getById'](followingId);
      if(!following){
        res.status(404).json({message: 'following not found.'});
      }else {
        const {signatures} = following;
        if (signatures && signatures.length > 0) {
          const withAllSignatures =  signatures.filter(s => s.uploaded);
          if(withAllSignatures && withAllSignatures.length === 5) {
            const {project} = following;
            const projectId = project._id;
            const query = {projectId: projectId};

            let invTeamPersons;
            let groups;

            try {
              invTeamPersons = await InvTeamPersonDao['getAll'](query);
              groups = await GroupDao['getAll'](query);
            } catch (e) {
              res.status(500).json({message: err});
            }

            let html;
            try {
              html = ProjectHtml.buildHtml(project, invTeamPersons, groups, signatures);
            } catch (e) {
              res.status(500).json({message: err});
            }

            pdf.create(html, config).toFile(`./public/files/followings/${followingId}/reports/following-signed.pdf`, function (err, success) {
              if (err) {
                res.status(500).json({message: err});
              } else {
                res.status(200).json(success);
              }
            });
          }
        }
      }

    } catch (e) {
      res.status(500).json({message: err});
    }
  }catch (err){
    const errorFormatter = ({ msg, param }) => {
      return `The value: ${param} ${msg}`;
    };
    const result = validationResult(req).formatWith(errorFormatter);
    if(!result.isEmpty()){
      return res.status(422).json({ errors: result.array() });
    }
  }
}

/**
 * Generate Partial Report PDF
 * @param req
 * @param res
 * @param next
 */
async function getPartialReportInPdf(req, res, next) {
  try{
    validationResult(req).throw();

    let followingId = req.params.id;

    FollowingDao['getById'](followingId)
      .then(async following =>{
        if(!following){
          res.status(404).json({message: 'following not found.'});
        } else {
  
          try {
            const dir = `${rootPath}followings/${followingId}/reports`;
            const filename = generatePdf(following, dir);
            res.status(200).json({filename});
          } catch ( err ) {
            res.status(500).json({message: err});
          }
        }
      })
      .catch(err => {
        res.status(500).json({message: err});
      });
  }catch (err){
    const errorFormatter = ({ msg, param }) => {
      return `The value: ${param} ${msg}`;
    };
    const result = validationResult(req).formatWith(errorFormatter);
    if(!result.isEmpty()){
      return res.status(422).json({ errors: result.array() });
    }
  }
}

/**
 * Generate Services PDF
 * @param req
 * @param res
 * @param next
 */
async function getServicesPdf(req, res, next) {
  try{
    validationResult(req).throw();

    let followingId = req.params.id;

    FollowingDao['getById'](followingId)
      .then(async following =>{
        if(!following){
          res.status(404).json({message: 'following not found.'});
        }else {
          const html = FollowingServicesHtml.buildHtml(following);
          pdf.create(html, config).toFile(`./public/files/followings/${followingId}/reports/services.pdf`, function (err, success) {
            if (err) {
              res.status(500).json({message: err});
            } else {
              res.status(200).json(success);
            }
          });
        }
      })
      .catch(err => {
        res.status(500).json({message: err});
      });
  }catch (err){
    const errorFormatter = ({ msg, param }) => {
      return `The value: ${param} ${msg}`;
    };
    const result = validationResult(req).formatWith(errorFormatter);
    if(!result.isEmpty()){
      return res.status(422).json({ errors: result.array() });
    }
  }
}

function getAllInPdf(req, res, next) {
  const query = getQueryWithUserId(req);

  FollowingDao['getAll'](query)
    .then(async followings => {

      var projectRows = [];
      for (let i = 0; i < followings.length; i++) {
        const obj = followings[i];
        const rowEl =
          `<tr>
             <td>${obj.title}</td>
             <td>${obj.totalEvaluation || 'No evaluado aún'}</td>
             </tr>`;

        projectRows.push(rowEl);
      }

      var html = `
        <style>
         @import url('https://fonts.googleapis.com/css?family=Titillium+Web:400,700');
         * {
          font-family: 'Titillium Web', sans-serif;
          font-size: 14px;
         }
         
         h1 {
          font-size: 1.4em;
          font-weight: bold;
         }
         
         .box {
          margin-top: 16px;
          border: 1px solid grey;
          padding: 6px;
         }
         
         table {
          width: 100%;
         }
         
        </style>
        <div id="following-preview" class="print-section">
          <div id="pageHeader">
            <span style="float: right"> </span>
          </div>
        
          <h1>Lista de Proyectos</h1>
          
          <div class="box">
            
            
            <table>
              <tr>
                <th>Nombre</th> 
                <th>Puntaje</th> 
              </tr>
              
              ${projectRows}
           </table>
          </div>
         
        </div>
        `;

      pdf.create(html, config).toFile(`./public/files/Lista-de-proyectos.pdf`, function (err, success) {
        if (err) {
          res.status(500).json({message: err});
        } else {
          res.status(200).json(success);
        }
      });
    })
    .catch(err => {
      res.status(500).json({message: err});
    });

}

const idValidation = [
    check('id')
        .exists().withMessage('is required')
        .isMongoId().withMessage('is an invalid ObjectId format.')
];

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
    uploadFile,
    getAllInPdf,
    getByIdInPdf,
    getPartialReportInPdf,
    getServicesPdf,
    idValidation,
};
