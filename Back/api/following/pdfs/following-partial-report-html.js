function currency(value) {
  const numFixed = value.toFixed(2);
  const cop = numFixed.replace(/\./g, ',');
  return 'COP ' + cop.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

function formatDate(date) {
  const d = new Date(date);
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

function buildHtml(following) {
  const {partialReportTasks, ..._following} = following;
  let tasks = [];

  partialReportTasks.forEach((task, index) => {
    const row = `
       <tr>
        <td colspan="10">
          <p>${task.description}</p>
        </td>
        <td colspan="6">
          <p>${formatDate(task.estimatedEndDate)}</p>
        </td>
        <td colspan="11">
           <p>${formatDate(task.realEndDate)}</p>
        </td>
        <td colspan="9">
         <p>${task.gap}</p>
        </td>
        <td colspan="3">
         <p>${task.advance} %</p>
        </td>
      </tr>
    `;
    tasks.push(row);
  });


  return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Formato de Informe Parcial</title>
            <style>
             @import url('https://fonts.googleapis.com/css?family=Titillium+Web:400,700');
             * {
              font-family: 'Titillium Web', sans-serif;
              font-size: 10px;
             }
             
             h1 {
              font-size: 1.4em;
             }
             
             tr {
                height: 1.5em;
             }
             
             .box {
              margin-top: 16px;
              padding: 6px;
             }
               
             table {
               width: 100%;
             }
    
             span.key-words {
                 padding: 8px;
                 margin: 8px;
             }
             
              .text-center {
                text-align: center;
              }
            
              .uppercase {
                text-transform: uppercase;
              }
            
              .bold {
                font-weight: bold;
              }
              
              .no-line {
                line-height: 1;
              }
              
              .intern-code {
                width: 200px;
                float: right;
              }
              .bg-grey {
                background-color: #f2f2f2;
              }
              .padding {
                padding: 6px;
              }
              
              .bg-blue {
                background: #001f60;
                color: white;
                text-align: center;
              }
              
              .shadow-text {
                color: #a6a6a6;
              }
              
              .text-right {
                text-align: right;
              }
          
        </style>
        </head>
        <body>
        <div>
          <span style="float: right"></span>
          <table class="bold">
            <tbody>
              <tr class="text-center">
                <td rowspan="3" style="width: 10px;"></td>
                <td style="width: 445px;">
                  <p>FUERZA A&Eacute;REA COLOMBIANA</p>
                  <p>AUTORIDAD AERON&Aacute;UTICA DE LA AVIACI&Oacute;N DE ESTADO</p>
                </td>
                <td style="width: 85px;">
                  <p>C&oacute;digo</p>
                </td>
                <td style="width: 123px;">
                  <p>GH-JEA-FR-014</p>
                </td>
              </tr>
              <tr class="text-center">
                <td rowspan="2" style="width: 445px;">
                  <p>FORMATO INFORME PARCIAL DE AVANCE DE PROYECTOS DE INVESTIGACI&Oacute;N, DESARROLLO TECNOL&Oacute;GICO E INNOVACI&Oacute;N (I+D+I)</p>
                </td>
                <td style="width: 85px;">
                  <p>Versi&oacute;n N&deg;</p>
                </td>
                <td style="width: 123px;">
                  <p>01</p>
                </td>
              </tr>
              <tr class="text-center">
                <td style="width: 85px;">
                  <p>Vigencia</p>
                </td>
                <td style="width: 123px;">
                  <p>22-11-2018</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
          
        <table>
          <tbody>
          <tr>
            <td colspan="27" class="bg-blue bold uppercase text-center">1. Informaci&oacute;n General del Proyecto</td>
            <td colspan="6" class="bg-grey">
              <p>C&oacute;digo</p>
            </td>
            <td colspan="6" class="bg-grey">
              <p>DICTI- ____/20__</p>
            </td>
          </tr>
          <tr>
            <td class="bg-grey">
              <p>T&iacute;tulo</p>
            </td>
            <td colspan="38"><br /><br /><br /></td>
          </tr>
          <tr>
            <td colspan="6" class="bg-grey">
              <p>Investigador L&iacute;der</p>
            </td>
            <td colspan="15"></td>
            <td colspan="6" class="bg-grey">
              <p>Correo</p>
            </td>
            <td colspan="12">
              <p class="shadow-text">@fac.mil.co</p>
            </td>
          </tr>
          <tr>
            <td colspan="6" class="bg-grey">
              <p>Unidad/Dependencia</p>
            </td>
            <td colspan="15"></td>
            <td colspan="6" class="bg-grey">
              <p>Tel&eacute;fono</p>
            </td>
            <td colspan="12"></td>
          </tr>
          <tr>
            <td colspan="6" class="bg-grey">
              <p>Fuente(s) de Financiaci&oacute;n</p>
            </td>
            <td colspan="15"></td>
            <td colspan="13" class="bg-grey">
              <p>Fecha del Informe</p>
            </td>
            <td>
              <p class="shadow-text">dd</p>
            </td>
            <td colspan="2">
              <p class="shadow-text">mm</p>
            </td>
            <td colspan="2">
              <p class="shadow-text">aaaa</p>
            </td>
          </tr>
          <tr>
            <td colspan="2" class="bg-grey">
              <p>Informe parcial No.</p>
            </td>
            <td colspan="4"></td>
            <td colspan="33"></td>
          </tr>
          <tr>
            <td colspan="39" class="bg-blue bold uppercase">
              2. Cumplimiento Plan de Inversi&oacute;n del Proyecto
            </td>
          </tr>
          <tr>
            <td colspan="7" rowspan="2" class="bg-grey">
              <p>Rubro</p>
            </td>
            <td colspan="23" class="bg-grey">
              <p>Ejecuci&oacute;n a la fecha</p>
            </td>
            <td colspan="9" rowspan="2" class="bg-grey">
              <p>% Cumplimiento <span class="shadow-text">(ejecutado/asignado)x100%</span></p>
            </td>
          </tr>
          <tr>
            <td colspan="7" class="bg-grey">
              <p>Presupuesto Asignado</p>
            </td>
            <td colspan="16" class="bg-grey">
              <p>Presupuesto Ejecutado</p>
              <p class="shadow-text">(Adjunte Soportes)</p>
            </td>
          </tr>
          <tr>
            <td colspan="7" class="bg-grey">
              <p>Equipos</p>
            </td>
            <td colspan="7" >
              <p>$</p>
            </td>
            <td colspan="16">
              <p>$</p>
            </td>
            <td colspan="9">
              <p>%</p>
            </td>
          </tr>
          <tr>
            <td colspan="7" class="bg-grey">
              <p>Materiales e insumos</p>
            </td>
            <td colspan="7">
              <p>$</p>
            </td>
            <td colspan="16">
              <p>$</p>
            </td>
            <td colspan="9">
              <p>%</p>
            </td>
          </tr>
          <tr>
            <td colspan="7" class="bg-grey">
              <p>Bibliograf&iacute;a</p>
            </td>
            <td colspan="7">
              <p>$</p>
            </td>
            <td colspan="16">
              <p>$</p>
            </td>
            <td colspan="9">
              <p>%</p>
            </td>
          </tr>
          <tr>
            <td colspan="7" class="bg-grey">
              <p>Servicios t&eacute;cnicos</p>
            </td>
            <td colspan="7">
              <p>$</p>
            </td>
            <td colspan="16">
              <p>$</p>
            </td>
            <td colspan="9">
              <p>%</p>
            </td>
          </tr>
          <tr>
            <td colspan="7" class="bg-grey">
              <p>Adecuaci&oacute;n de infraestructura</p>
            </td>
            <td colspan="7">
              <p>$</p>
            </td>
            <td colspan="16">
              <p>$</p>
            </td>
            <td colspan="9">
              <p>%</p>
            </td>
          </tr>
          <tr >
            <td colspan="7" class="bg-grey">
              <p>Software</p>
            </td>
            <td colspan="7">
              <p>$</p>
            </td>
            <td colspan="16">
              <p>$</p>
            </td>
            <td colspan="9">
              <p>%</p>
            </td>
          </tr>
          <tr>
            <td colspan="7" class="bg-grey">
              <p>Salidas de campo</p>
            </td>
            <td colspan="7">
              <p>$</p>
            </td>
            <td colspan="16">
              <p>$</p>
            </td>
            <td colspan="9">
              <p>%</p>
            </td>
          </tr>
          <tr>
            <td colspan="7" class="bg-grey">
              <p>Viajes</p>
            </td>
            <td colspan="7">
              <p>$</p>
            </td>
            <td colspan="16">
              <p>$</p>
            </td>
            <td colspan="9">
              <p>%</p>
            </td>
          </tr>
          <tr>
            <td colspan="7" class="bg-grey">
              <p>Eventos acad&eacute;micos</p>
            </td>
            <td colspan="7">
              <p>$</p>
            </td>
            <td colspan="16">
              <p>$</p>
            </td>
            <td colspan="9">
              <p>%</p>
            </td>
          </tr>
          <tr>
            <td colspan="7" class="bg-grey">
              <p>Publicaciones</p>
            </td>
            <td colspan="7">
              <p>$</p>
            </td>
            <td colspan="16">
              <p>$</p>
            </td>
            <td colspan="9">
              <p>%</p>
            </td>
          </tr>
          <tr>
            <td colspan="7" class="bg-grey">
              <p>Personal cient&iacute;fico</p>
            </td>
            <td colspan="7">
              <p>$</p>
            </td>
            <td colspan="16">
              <p>$</p>
            </td>
            <td colspan="9">
              <p>%</p>
            </td>
          </tr>
          <tr>
            <td colspan="7" class="bg-grey">
              <p>Gastos de operaci&oacute;n</p>
            </td>
            <td colspan="7">
              <p>$</p>
            </td>
            <td colspan="16">
              <p>$</p>
            </td>
            <td colspan="9">
              <p>%</p>
            </td>
          </tr>
          <tr>
            <td colspan="7" class="bg-grey">
              <p>TOTAL PROYECTO</p>
            </td>
            <td colspan="7">
              <p>$</p>
            </td>
            <td colspan="16">
              <p>$</p>
            </td>
            <td colspan="9">
              <p>%</p>
            </td>
          </tr>
          <tr>
            <td colspan="39">
              <p>Justificaci&oacute;n Saldo Pendiente de Ejecuci&oacute;n del Proyecto</p>
            </td>
          </tr>
          <tr>
            <td colspan="5" class="bg-grey">
              <p>Rubro <span class="shadow-text">(adicione filas) </span></p>
            </td>
            <td colspan="6" class="bg-grey">
              <p>Valor</p>
            </td>
            <td colspan="21" class="bg-grey">
              <p>Justificaci&oacute;n</p>
            </td>
            <td colspan="7" class="bg-grey">
              <p>Soportes (adjunte)</p>
            </td>
          </tr>
          <tr>
            <td colspan="5"></td>
            <td colspan="6"></td>
            <td colspan="21"></td>
            <td colspan="7"></td>
          </tr>
          <tr>
            <td colspan="5"></td>
            <td colspan="6"></td>
            <td colspan="21"></td>
            <td colspan="7"></td>
          </tr>
          <tr>
            <td colspan="5"></td>
            <td colspan="6"></td>
            <td colspan="21"></td>
            <td colspan="7"></td>
          </tr>
          <tr>
            <td colspan="5"></td>
            <td colspan="6"></td>
            <td colspan="21"></td>
            <td colspan="7"></td>
          </tr>
          <tr>
            <td colspan="39" class="bg-blue bold uppercase">
              3. Cumplimiento Cronograma de Actividades del Proyecto
            </td>
          </tr>
          <tr>
            <td colspan="3" class="bg-grey">
              <p>Fecha inicio proyecto</p>
            </td>
            <td colspan="5">
              <p class="shadow-text">dd</p>
            </td>
            <td colspan="2">
              <p class="shadow-text">mm</p>
            </td>
            <td colspan="2">
              <p class="shadow-text">aaaa</p>
            </td>
            <td colspan="5" class="bg-grey">
              <p>Duraci&oacute;n <span>(en d&iacute;as)</span></p>
            </td>
            <td colspan="3"></td>
            <td colspan="14" class="bg-grey">
              <p>D&iacute;as para final proyecto</p>
            </td>
            <td colspan="2"></td>
            <td colspan="3"></td>
          </tr>
          <tr>
            <td colspan="3" class="bg-grey">
              <p>Fecha t&eacute;rmino estimada&nbsp;</p>
            </td>
            <td colspan="5">
              <p class="shadow-text">dd</p>
            </td>
            <td colspan="2">
              <p class="shadow-text">mm</p>
            </td>
            <td colspan="2">
              <p class="shadow-text">aaaa</p>
            </td>
            <td colspan="27" class="bg-grey"></td>
          </tr>
          <tr>
            <td colspan="39" >
              <p>Relacione las actividades del proyecto mencionadas en el GH-JEA-FR-014</p>
            </td>
          </tr>
          <tr class="bg-grey">
            <td colspan="10">
              <p>Tarea<span class="shadow-text">(adicione filas)</span></p>
            </td>
            <td colspan="6">
              <p>Fecha planeada cumplimiento</p>
            </td>
            <td colspan="11">
              <p>Fecha real cumplimiento</p>
            </td>
            <td colspan="9">
              <p>Desfase <span class="shadow-text">(en d&iacute;as)</span></p>
            </td>
            <td colspan="3">
              <p>% Avance</p>
            </td>
          </tr>
          
         ${tasks}
          
          <tr>
            <td colspan="36" class="bg-grey">
              <p>AVANCE GLOBAL REAL DEL PROYECTO</p>
            </td>
            <td colspan="3">
              <p>%</p>
            </td>
          </tr>
          <tr>
            <td colspan="39" class="bg-blue bold uppercase">
              4. Modificaciones y/o Ajustes al Proyecto
            </td>
          </tr>
          <tr>
            <td colspan="39" class="bg-grey">
              <p class="shadow-text">Relacione las solicitudes de modificaci&oacute;n y/o ajustes al proyecto tanto para el cumplimiento de las actividades principales o hitos, como para la ejecuci&oacute;n financiera del mismo. (Si requiere m&aacute;s espacio adjunte en informe separado y sustente en documentos).</p>
            </td>
          </tr>
          <tr>
            <td colspan="8" class="bg-grey">
              <p>Actividades principales o Hitos</p>
            </td>
            <td></td>
            <td colspan="6" class="bg-grey">
              <p>Ejecuci&oacute;n Financiera</p>
            </td>
            <td colspan="3"></td>
            <td colspan="7" class="bg-grey">
              <p>Otra</p>
            </td>
            <td colspan="14">
              <p class="shadow-text">Especifique</p>
            </td>
          </tr>
          <tr class="bg-grey">
            <td colspan="9">
              <p>Descripci&oacute;n Modificaci&oacute;n y/o Ajuste <span class="shadow-text">(adicione filas)</span></p>
            </td>
            <td colspan="16">
              <p>Justificaci&oacute;n</p>
            </td>
            <td colspan="11">
              <p>Documentos (adjunte)</p>
            </td>
            <td colspan="3">
              <p>Aprobado DICTI</p>
            </td>
          </tr>
          <tr>
            <td colspan="9"></td>
            <td colspan="16"></td>
            <td colspan="11"></td>
            <td class="bg-grey">
              <p class="shadow-text text-center">SI</p>
            </td>
            <td colspan="2" class="bg-grey">
              <p class="shadow-text text-center">NO</p>
            </td>
          </tr>
          <tr>
            <td colspan="9"></td>
            <td colspan="16"></td>
            <td colspan="11"></td>
            <td class="bg-grey">
              <p class="shadow-text text-center">SI</p>
            </td>
            <td colspan="2" class="bg-grey">
              <p class="shadow-text text-center">NO</p>
            </td>
          </tr>
          <tr>
            <td colspan="9"></td>
            <td colspan="16"></td>
            <td colspan="11"></td>
            <td class="bg-grey">
              <p class="shadow-text text-center">SI</p>
            </td>
            <td colspan="2" class="bg-grey">
             <p class="shadow-text text-center">NO</p>
            </td>
          </tr>
          <tr>
            <td colspan="9"></td>
            <td colspan="16"></td>
            <td colspan="11"></td>
            <td class="bg-grey">
              <p class="shadow-text text-center">SI</p>
            </td>
            <td colspan="2" class="bg-grey">
              <p class="shadow-text text-center">NO</p>
            </td>
          </tr>
          <tr>
            <td colspan="9" class="bg-grey">
              <p>Quien presenta el informe</p>
              <p class="shadow-text">(Investigador L&iacute;der)</p>
            </td>
            <td colspan="15">
              <p class="shadow-text">Grado y nombre</p>
            </td>
            <td colspan="5">
              <p>Firma</p>
            </td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td colspan="39" class="bg-blue bold uppercase">
              5. Validaci&oacute;n del Informe de Avance <span class="shadow-text">(para ser diligenciado por el Centro de I+D+i a cargo del Proyecto)</span>
            </td>
          </tr>
          <tr>
            <td colspan="36">
              <p>El Informe parcial de avance del proyecto fue presentado en la fecha establecida?</p>
            </td>
            <td colspan="2" class="bg-grey">
              <p class="shadow-text text-center">SI</p>
            </td>
            <td class="bg-grey">
              <p class="shadow-text text-center">NO</p>
            </td>
          </tr>
          <tr>
            <td colspan="36">
              <p>La informaci&oacute;n contenida en el Informe parcial de avance del proyecto est&aacute; debidamente soportada?</p>
            </td>
            <td colspan="2" class="bg-grey">
              <p class="shadow-text text-center">SI</p>
            </td>
            <td class="bg-grey">
              <p class="shadow-text text-center">NO</p>
            </td>
          </tr>
          <tr>
            <td colspan="36">
              <p>La ejecuci&oacute;n de los recursos financieros es acorde con el plan de inversi&oacute;n planeado?</p>
            </td>
            <td colspan="2" class="bg-grey">
              <p class="shadow-text text-center">SI</p>
            </td>
            <td class="bg-grey">
              <p class="shadow-text text-center">NO</p>
            </td>
          </tr>
          <tr>
            <td colspan="36">
              <p>Los cambios al plan de inversi&oacute;n est&aacute;n debidamente justificados y aprobados por DICTI?</p>
            </td>
            <td colspan="2" class="bg-grey">
              <p class="shadow-text text-center">SI</p>
            </td>
            <td class="bg-grey">
              <p class="shadow-text text-center">NO</p>
            </td>
          </tr>
          <tr>
            <td colspan="36">
              <p>El avance global del proyecto corresponde con el cronograma de actividades planeado?</p>
            </td>
            <td colspan="2" class="bg-grey">
              <p class="shadow-text text-center">SI</p>
            </td>
            <td class="bg-grey">
              <p class="shadow-text text-center">NO</p>
            </td>
          </tr>
          <tr>
            <td colspan="36">
              <p>Los cambios en las actividades principales o hitos est&aacute;n debidamente justificados y aprobados por DICTI?</p>
            </td>
            <td colspan="2" class="bg-grey">
              <p class="shadow-text text-center">SI</p>
            </td>
            <td class="bg-grey">
              <p class="shadow-text text-center">NO</p>
            </td>
          </tr>
          <tr>
            <td colspan="19" rowspan="3">
              <p>Con base en la informaci&oacute;n anterior el proyecto de investigaci&oacute;n debe:</p>
            </td>
            <td colspan="9" class="bg-grey">
              <p>Continuar</p>
            </td>
            <td colspan="3"></td>
            <td colspan="8" rowspan="3"></td>
          </tr>
          <tr>
            <td colspan="9" class="bg-grey">
              <p>Suspenderse</p>
            </td>
            <td colspan="3"></td>
          </tr>
          <tr>
            <td colspan="9" class="bg-grey">
              <p>Cancelarse</p>
            </td>
            <td colspan="3"></td>
          </tr>
          <tr>
            <td colspan="39">
              <p>Determine las acciones a tomar en caso de suspensi&oacute;n o cancelaci&oacute;n del proyecto de investigaci&oacute;n.
              <span class="shadow-text">(Visita de auditor&iacute;a al proyecto / Inicio de acciones disciplinarias y/o administrativas, otras)</span></p>
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></td>
          </tr>
          <tr>
            <td colspan="4" class="bg-grey"><br />
              <p>Jefe Centro de I+D+i o Subdirector de Investigaci&oacute;n e Innovaci&oacute;n</p>
              <p>&nbsp;</p>
            </td>
            <td colspan="19">
              <p class="shadow-text">Grado y nombre</p>
            </td>
            <td colspan="4" class="bg-grey">
              <p>Firma</p>
            </td>
            <td colspan="12"></td>
          </tr>
          </tbody>
        </table>
        </body>
        </html>`;
};

module.exports = {
  buildHtml
};
