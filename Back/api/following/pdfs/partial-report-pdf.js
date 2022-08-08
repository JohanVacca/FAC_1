const PdfPrinter = require('pdfmake');
const fs = require('fs');

const fonts = {
  Roboto: {
    normal: 'public/assets/fonts/Roboto-Regular.ttf',
    bold: 'public/assets/fonts/Roboto-Medium.ttf',
    italics: 'public/assets/fonts/Roboto-Italic.ttf',
    bolditalics: 'public/assets/fonts/Roboto-MediumItalic.ttf'
  }
};

const printer = new PdfPrinter(fonts);


function formatDate(date) {
  const d = new Date(date);
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

function formatModificationType(type) {
  switch ( type ) {
    case 1:
      return 'Actividades Principales o Hitos';
    case 2:
      return  'Ejecución Financiera';
    case 3:
      return 'Otro';
    default:
      return '';
  }
}

function formatApprovalStatus(status) {
  switch ( status ) {
    case 1:
      return 'Pendiente por Revisión';
    case 2:
      return 'SI';
    case 3:
      return 'NO';
    default:
      return '';
  }
}


function generatePdf( following, dir ) {
  
  // 1.  Información General del Proyecto
  const projectGeneralInfo = getProjectGeneralInfo(following);
  
  // 2. Cumplimiento Plan de Inversión del Proyecto
  const projectPlanSection = getProjectPlanSection(following);
  
  // 3. Cumplimiento Cronograma de Actividades de Proyecto
  const projectScheduleSection = getProjectScheduleSection(following);
  
  // 4. Modificaciones y/o Ajustes al Proyecto
  const projectChangesSection = getProjectModificationsSection(following);
  
  // 5. Validación del Informe de Avance
  const projectProgressValidation = getProjectProgressValidation(following);
  
  const doc = {
    content: [
      {
        style: 'tableExample',
        color: '#444',
        table: {
          widths: [50, '*', 'auto', 'auto'],
          headerRows: 3,
          // keepWithHeaderRows: 1,
          body: [
            [
              {
                image: 'public/assets/images/logo.png',
                width: 50,
                height: 50,
                rowSpan: 3,
              },
              {
                text: 'FUERZA AÉREA COLOMBIANA ' +
                  'AUTORIDAD AERONÁUTICA DE LA AVIACIÓN DE ESTADO',
                style: 'boldText',
              },
              {
                text: 'Código',
                style: 'boldText',
              },
              { text: 'GH-JEA-FR-042', style: 'boldText'},
            ],
            [
              {},
              { text:
                  'FORMATO INFORME PARCIAL DE AVANCE DE ' +
                  'PROYECTOS DE INVESTIGACIÓN, ' +
                  'DESARROLLO TECNOLÓGICO E INNOVACIÓN ' +
                  '(I+D+I)', rowSpan: 2, style: 'boldText' },
              { text: 'Versión No', style: 'boldText' },
              { text: '01', style: 'boldText' },
            ],
            [
              {},
              {},
              { text: 'Vigencia', style: 'boldText' },
              { text: '23-11-2018', style: 'boldText'},
            ],
          ]
        },
      },
      {
        table: {
          widths: ['auto', '*', 'auto', 'auto'],
          body: projectGeneralInfo
        }
      },
      {
        table: {
          widths: ['*', 'auto', 'auto', 'auto'],
          rows: 10,
          body: projectPlanSection
        }
      },
      {
        table: {
          widths: ['auto', 'auto', 'auto', '*', 'auto', '*'],
          rows: 10,
          body: projectScheduleSection
        }
      },
      {
        table: {
          widths: ['*', '*', 'auto', '*'],
          rows: 10,
          body: projectChangesSection
        }
      },
      {
        table: {
          widths: ['*', '*', 'auto', '*'],
          rows: 10,
          body: projectProgressValidation
        }
      },
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 10]
      },
      subheader: {
        fontSize: 16,
        bold: true,
        margin: [0, 10, 0, 5]
      },
      tableExample: {
        margin: [0, 5, 0, 15]
      },
      tableOpacityExample: {
        margin: [0, 5, 0, 15],
        fillColor: 'blue',
        fillOpacity: 0.3
      },
      boldText: {
        bold: true,
        fontSize: 14,
        color: 'black'
      },
      placeholder: {
        bold: false,
        fontSize: 10,
        color: 'grey'
      },
    },
    defaultStyle: {
      alignment: 'center',
      fontSize: 12,
    }
  };
  
  try {
    !fs.existsSync(dir) && fs.mkdirSync(dir, {recursive: true});
    const filename = `${dir}/partial-report.pdf`;
    const pdfDoc = printer.createPdfKitDocument(doc);
    pdfDoc.pipe(fs.createWriteStream(filename));
    pdfDoc.end();
    return filename;
  } catch(err) {
    console.error(err)
  }
}


/*
 * 1. Información General del Proyecto
 */

function getProjectGeneralInfo( following ) {
  const commanderName = `${following.project.commander.profile.names || '' } ${following.project.commander.profile.surname || '' }`;
  const commanderEmail = `${following.project.commander.email || '@fac.mil.co'}`;
  return [
    [
      {
        text: '1. Información General del Proyecto',
        colSpan: 2,
        style: 'boldText'
      },
      {},
      {
        text: 'Código',
        style: 'boldText'
      },
      {
        text: 'DICTI-___/20__',
      }
    ],
    [
      {
        text: 'Título',
      },
      {
        text: following.project.title || ' ',
        colSpan: 3,
      }
    ],
    [
      {
        text: 'Investigador Líder',
      },
      {
        text: commanderName,
      },
      {
        text: 'Correo',
      },
      {
        style: 'placeholder',
        text: commanderEmail,
        alignment: 'right'
      }
    ],
    [
      {
        text: 'Unidad/Dependencia'
      },
      {
        text: following.project.dependency || '',
      },
      {
        text: 'Teléfono',
      },
      {
        text: following.project.commander.phoneNumber || '',
      },
    ],
    [
      {
        text: 'Fuente(s) de Financiación'
      },
      {
        text: '',
      },
      {
        text: 'Fecha de Informe',
      },
      {
        style: 'placeholder',
        text: 'dd-mm-aaa',
      },
    ],
    [
      {
        text: 'Informe Parcial No'
      },
      {
        text: '',
      },
      {
        text: '',
        colSpan: 2
      },
    ]
  ]
}
/*
* 2. Cumplimiento Plan de Inversión del Proyecto two
*/
function getProjectPlanSection( following ) {
 let section = [
   [
     {
       text: '2. Cumplimiento Plan de Inversión del Proyecto',
       colSpan: 4,
       style: 'boldText'
     },
     {},
     {},
     {}
   ],
   [
     {
       text: 'Rubro',
       rowSpan: 2,
     },
     {
       text: 'Ejecucicón a la fecha',
       colSpan: 2,
     },
     {},
     {
       text: '% Cumplimiento',
       rowSpan: 2,
     },
   ],
   [
     {},
     {
       text: 'Presupuesto Asignado'
     },
     {
       text: 'Presupuesto Ejecutado'
     },
     {}
   ],
 ];
  const sectionWithEntries = getTableWithEntryValues(section, following);
  
  const justificationSection = getTableWithJustificationValues();
  return [...section, ...sectionWithEntries, ...justificationSection];
}

function getTableWithEntryValues(section, following) {
  let rows = [];
  let total = 0;
  let totalExecuted = 0;
  let acumPct = 0;
  
  if (!following.partialReportEntries) {
    return [];
  }
  
  const entries = following.partialReportEntries;
  
  for(let i = 0; i < entries.length ; i ++) {
    const entry = entries[i];
    
    const entryTotal = entry.total;
    total += entryTotal;
  
    const entryExecuted = entry.executed;
    totalExecuted += entryExecuted;
  
    const entryPct = entry.pct;
    acumPct += entryPct;
    
    rows.push([{
        text: entry.descr,
      },
      {
        text: entryTotal.toString(),
        alignment: 'right',
      },
      {
        text: entryExecuted.toString(),
        alignment: 'right',
      },
      {
        text: `${entryPct} %`,
        alignment: 'right',
      }]);
  }
  
  const totalPct = ((acumPct / entries.length) || 0).toFixed(2);
  
  // TODO: change this to following logic
  rows.push([
    {
      text: 'TOTAL PROYECTO',
      style: 'boldText'
    },
    {
      text: total,
      alignment: 'right',
    },
    {
      text: totalExecuted,
      alignment: 'right',
    },
    {
      text: `${totalPct} %`,
      alignment: 'right',
    }]);
  return rows;
}

function getTableWithJustificationValues() {
  // TODO: change to real values
  return [
    [
      {
        text: 'Justificación Saldo Pendiente de Ejecución del Proyecto',
        colSpan: 4,
        style: 'boldText'
      },
      {},
      {},
      {}
    ],
    [
      {
        text: 'Rubro (adicione filas)',
      },
      {
        text: 'Valor',
      },
      {
        text: 'Justificación',
      },
      {
        text: 'Soportes (adjunte)',
      },
    ],
    [
      {
        text: ' ',
      },
      {
        text: ' ',
      },
      {
        text: ' ',
      },
      {
        text: ' ',
      },
    ],
    [
      {
        text: ' ',
      },
      {
        text: ' ',
      },
      {
        text: ' ',
      },
      {
        text: ' ',
      },
    ],
    [
      {
        text: ' ',
      },
      {
        text: ' ',
      },
      {
        text: ' ',
      },
      {
        text: ' ',
      },
    ],
  ];
}

/*
 * 3. Cumplimiento Cronograma de Actividades de Proyecto
 */

function getProjectScheduleSection( following ) {
  // TODO: change to real values
  const tasks = getProjectTasks(following);
  return [
    [
      {
        text: '3. Cumplimiento Cronograma de Actividades del Proyecto',
        colSpan: 6,
        style: 'boldText'
      },
      {},
      {},
      {},
      {},
      {}
    ],
    [
      {
        text: 'Fecha Inicio Proyecto',
      },
      {
        text: 'dd/mm/aaaa',
      },
      {
        text: 'Duración (en días)',
      },
      {
        text: ' ',
      },
      {
        text: 'Dias para final Proyecto',
      },
      {
        text: ' ',
      }
    ],
    [
      {
        text: 'Fecha término estimado',
      },
      {
        text: 'dd/mm/aaaa',
      },
      {
        text: '',
        colSpan: 4,
      },
      {},
      {},
      {}
    ],
    [
      {
        text: 'Relacione las actividades del proyecto mencionadas en el GH-JEA-FR-014',
        colSpan: 6,
      },
      {},
      {},
      {},
      {},
      {}
    ],
    [
      {
        text: 'Tarea (adicione filas)',
        colSpan: 2,
      },
      {},
      {
        text: 'Fecha planeada cumplimiento',
      },
      {
        text: 'Fecha real cumplimiento',
      },
      {
        text: 'Desfase (en días)',
      },
      {
        text: '% Avance',
      },
    ],
    ...tasks
  ];
}

function getProjectTasks( following) {
  let rows = [];
  let acumProgress = 0;
  
  if (!following.partialReportTasks) {
    return [];
  }
  
  const tasks = following.partialReportTasks;
  
  for(let i = 0; i < tasks.length ; i ++) {
    const task = tasks[i];
    
    const taskProgress = task.progress;
    acumProgress += taskProgress;
    
    rows.push([
      {
        text: task.description,
        colSpan: 2,
        alignment: 'left',
      },
      {},
      {
        text: formatDate(task.estimatedEndDate),
        alignment: 'right',
      },
      {
        text: formatDate(task.realEndDate),
        alignment: 'right',
      },
      {
        text: task.gap,
        alignment: 'right',
      },
      {
        text: `${task.progress} %`,
        alignment: 'right',
      }
    ]);
  }
  
  const totalProgress = ((acumProgress / tasks.length) || 0).toFixed(2) ;
  
  rows.push([
    {
      text: 'AVANCE TOTAL DEL PROYECTO',
      style: 'boldText',
      colSpan: 5,
      alignment: 'left'
    },
    {},
    {},
    {},
    {},
    {
      text: `${totalProgress} %`,
      alignment: 'right',
    }
  ]);
  return rows;
}

/*
 * 4. Modificaciones y/o Ajustes al Proyecto
 */

function getProjectModificationsSection(following) {
  const modifications = getProjectModifications(following);
  return [
    [
      {
        text: '4. Modificaciones y/o Ajustes al Proyecto',
        colSpan: 4,
        style: 'boldText',
      },
      {},
      {},
      {}
    ],
    [
      {
        text: 'Relacione las solicitudes de modificación y/o ajustes al proyecto tanto para el cumplimiento de las actividades principales o hitos, como para la ejecución financiera del mismo. (Si requiere más espacio adjunte en informe separado y sustente en documentos)',
        colSpan: 4,
        style: 'placeholder'
      },
      {},
      {},
      {},
    ],
    [
      {
        text: 'Descripción Modificación y/o Ajuste (adicione filas)',
      },
      {
        text: 'Justificación',
      },
      {
        text: 'Tipo de Modificación',
      },
      {
        text: 'Aprobado DICTI',
      },
    ],
     ...modifications
  ];
}

function getProjectModifications(following) {
  let rows = [];
  
  if (!following.partialReportModifications) {
    return [];
  }
  
  const modifications = following.partialReportModifications;
  
  for(let i = 0; i < modifications.length ; i ++) {
    const modification = modifications[i];
    
    rows.push([
      {
        text: modification.modifyDescr,
        alignment: 'left',
      },
      {
        text: modification.justification,
        alignment: 'left',
      },
      {
        text: formatModificationType(modification.modificationType),
      },
      {
        text: formatApprovalStatus(modification.approvalStatus),
      }]);
  }
  
  rows.push([
    {
      text: 'Quien presenta el informe',
    },
    {
      text: 'Grado y nombre',
      colSpan: 3,
      style: 'placeholder',
    },
    {},
    {}
  ]);
  return rows;
}

/*
 * 5. Validación del Informe de Avance
 */

function getProjectProgressValidation(following) {
  const projectValidations = getProjectValidations(following);
  return [
    [
      {
        text: '5. Validación del Informe de Avance (para ser diligenciado por el Centro de I+D+i a cargo del Proyecto)',
        colSpan: 4,
        style: 'boldText'
      },
      {},
      {},
      {}
    ],
    ...projectValidations
  ];
}

function getProjectValidations(following) {
  let rows = [];
  
  if (!following.partialReportValidations) {
    return [];
  }
  
  const validations = following.partialReportValidations;
  
  for(let i = 0; i < validations.length ; i ++) {
    const validation = validations[i];
    
    rows.push([
      {
        text: validation.description,
        colSpan: 3,
        alignment: 'left',
      },
      {},
      {},
      {
        text: validation.checked ? 'SI' : 'NO',
      }
    ]);
  }
  
  rows.push(
    [
      {
        text: 'Con base en la información anterior el proyecto de investigación debe:',
        colSpan: 2,
      },
      {},
      {
        text: 'Continuar/Suspenderse/Cancelar', //TODO: update this value
        colSpan: 2,
      },
      {}
    ],
    [
      {
        text: 'Determine las acciones a tomar en caso de suspensión o cancelación del proyecto de investigación. (Visita de auditoría al proyecto / Inicio de acciones disciplinarias y/o administrativas, otras)',
        colSpan: 4,
      },
      {},
      {},
      {}
    ],
    [
      {
        text: 'Jefe Centro de I+D+i o Subdirector de Investigación e Innovación',
        alignment: 'left',
      },
      {
        text: 'Grado y nombre',
        alignment: 'left',
      },
      {
        text: 'Firma',
      },
      {
        text: ' ',
      },
    ]
  );
  return rows;
}

module.exports = {
  generatePdf
};
