'use strict';

const jwtMidd = require('../auth/jwt/jwt.middleware');
const jwt = require('../auth/jwt/jwt.service');

/**
 * Permite calcular el
 * porcentaje del rubro.
 */
function calculateEntriesPct(following) {
  if(!following.partialReportEntries) {
    return [];
  }
  const partialReportEntries =  following.partialReportEntries;
  
  return partialReportEntries.map(p => ({...p, pct: calculatePct(p.total, p.executed)}))
  
}

function addApproverInModifications( following, userId ) {
  if(!following.partialReportModifications) {
    return [];
  }
  
  const modifications = following.partialReportModifications;
  
  return modifications.map(m => ({...m, approvedBy: userId}));
}

/**
 * Calcula los valores
 * de las tareas
 * @param partialReportTasks
 * @returns {*[]}
 */
function validateTasks({partialReportTasks}) {
  let _partialReportTasks = [];

  _partialReportTasks = [...partialReportTasks || []];

  // Update file to with uploaded true
  _partialReportTasks.map((t) => {
    const diffInTime = new Date(t.estimatedEndDate).getTime() - new Date(t.realEndDate).getTime();
    const diffInDays = diffInTime / (1000 * 3600 * 24);
    t.gap = diffInDays;
    t.advance = 0; // TODO: refactor
  });
  return _partialReportTasks;
}

function getQueryWithUserId(req, res) {
  let currentQuery = {};
  try {
    if(req && req.query) {
      currentQuery = req.query;
    }
    const token = jwtMidd.removeBearerFromToken(req);
    const userInfo = jwt.getRole(token);
    const userId = userInfo._id;

    return {...currentQuery, createdBy: userId};
  } catch (e) {
    return res.status(403).json({message: 'User doesn\'t have permissions to create this item'});
  }
}

function setupSignatures(roles) {
  const adminId = roles.find((r) => r.name === 'Administrador')._id;
  const investigatorId = roles.find((r) => r.name === 'Investigador')._id;
  const evaluatorId = roles.find((r) => r.name === 'Evaluador')._id;
  const commanderId = roles.find((r) => r.name === 'Comandante')._id;
  const directorId = roles.find((r) => r.name === 'Director')._id;
  const subDirectorId = roles.find((r) => r.name === 'Sub-Director')._id;

  const signatures = [
    {
      path: '',
      position: 1,
      name: 'Firma del Investigador Principal',
      uniqueName: 'principal-investigator-signature',
      uploaded: false,
      allowedRole: [[investigatorId]]
    },
    {
      path: '',
      position: 2,
      name: 'Firma del Gestor ACTI',
      uniqueName: 'acti-manager-signature',
      uploaded: false,
      allowedRole: [[investigatorId], [evaluatorId]]
    },
    {
      path: '',
      position: 3,
      name: 'Firma del Comandante',
      uniqueName: 'commander-signature',
      uploaded: false,
      allowedRole: [[commanderId]]
    },
    {
      path: '',
      position: 4,
      name: 'Firma del Sub Director',
      uniqueName: 'sub-director-signature',
      uploaded: false,
      allowedRole: [[subDirectorId]]
    },
    {
      path: '',
      position: 5,
      name: 'Firma del Director',
      uniqueName: 'director-signature',
      uploaded: false,
      allowedRole: [[directorId]]
    }
  ];
  return signatures;
}

function setupPartialReportValidations() {
  return [
    {
      description: 'El Informe parcial de avance del proyecto fue presentado en la fecha establecida?',
      checked: false
    },
    {
      description: 'La información contenida en el Informe parcial de avance del proyecto está debidamente soportada?',
      checked: false
    },
    {
      description: 'La ejecución de los recursos financieros es acorde con el plan de inversión planeado?',
      checked: false
    },
    {
      description: 'Los cambios al plan de inversión están debidamente justificados y aprobados por DICTI?',
      checked: false
    },
    {
      description: 'El avance global del proyecto corresponde con el cronograma de actividades planeado?',
      checked: false
    },
    {
      description: 'Los cambios en las actividades principales o hitos están debidamente justificados y aprobados por DICTI?',
      checked: false
    }
  ]
}

function validateSignatures({signatures}) {
  let _signatures = [];

  _signatures = [...signatures || []];

  // Update file to with uploaded true
  _signatures.map((s) => {
    if (s.path !== '') {
      s.uploaded = true;
    }
  });
  return _signatures;
}

function calculatePct(total, excecuted) {
  if(!total || !excecuted) {
    return 0;
  }
  
  const pct = (excecuted * 100)/ total;
  return pct.toFixed(2);
}

module.exports = {
  calculateEntriesPct,
  validateTasks,
  getQueryWithUserId,
  setupSignatures,
  validateSignatures,
  setupPartialReportValidations,
  addApproverInModifications
};
