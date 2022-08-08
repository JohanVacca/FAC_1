function currency(value) {
  const numFixed = value.toFixed(2);
  const cop = numFixed.replace(/\./g, ',');
  return 'COP ' + cop.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

function buildHtml(project, invTeamPersons = [], groups = [], signatures = []) {
  let specificObjsRows = [];
  for (let i = 0; i < project.specificObjs.length; i++) {
    const obj = project.specificObjs[i];

    const rowEl =
      `<tr><td>${obj.descr}</td></tr>`;

    specificObjsRows.push(rowEl);
  }

  let keywordsRows = [];
  for (let i = 0; i < project.keywords.length; i++) {
    const obj = project.keywords[i];

    const rowEl =
      `<span class="key-words">${obj.descr}</span>`;

    keywordsRows.push(rowEl);
  }

  let biblioRows = [];
  for (let i = 0; i < project.bibliographies.length; i++) {
    const obj = project.bibliographies[i];

    const rowEl =
      `<tr><td>${obj.descr}</td></tr>`;

    biblioRows.push(rowEl);
  }

  let entriesRows = [];
  let totalEntryCash = 0;
  let totalEntryEspecies = 0;
  let totalProject = 0;
  const projectEntries = project.projectEntries.items.length > 0 ? project.projectEntries.items : [];
  projectEntries.forEach((entry, index) => {

    const totalCash = entry.facCash + entry.otherCash;
    const totalEspecies = entry.facSpecies + entry.otherSpecies;

    totalEntryCash += totalCash;
    totalEntryEspecies += totalEspecies;

    const rowEl =

      `<tr>
          <td class="bg-grey" style="width: 434px;">
            <p><span>${entry.descr}</span></p>
          </td>
          <td style="width: 72px;">
            <p><span>${currency(totalCash)}</span></p>
          </td>
          <td style="width: 69px;">
             <p><span>${currency(totalEspecies)}</span></p>
          </td>
        </tr>`;


    entriesRows.push(rowEl);
  });

  totalProject = totalEntryCash + totalEntryEspecies;

  let invTeamPersonRows = [];
  for (let i = 0; i < invTeamPersons.length; i++) {
    const obj = invTeamPersons[i];
    const rowEl =
      `<tr>
                     <td>${obj.grade}</td>
                     <td>${obj.names}</td>
                     <td>${obj.lastName}</td>
                     <td>${obj.position.descr}</td>
                     <td>${obj.dedication}</td>
                     <td>${obj.group.name}</td>
                     </tr>`;

    invTeamPersonRows.push(rowEl);
  }

  let groupTables = [];
  groups.forEach((group, index) => {
    const tableEl = `
        <table>
          <tbody>
          <tr>
            <td class="bg-grey" style="width: 168px;">
              <p>Nombre Grupo</p>
            </td>
            <td colspan="3">${group.name}</td>
          </tr>
          <tr>
            <td class="bg-grey" style="width: 168px;">
              <p>C&oacute;digo GrupLAC</p>
            </td>
            <td style="width: 99px;">${group.code}</td>
            <td class="bg-grey" style="width: 131px;">
              <p>Categor&iacute;a</p>
            </td>
            <td style="width: 162px;">${group.category.descr}</td>
          </tr>
          <tr>
            <td class="bg-grey" style="width: 168px;">
              <p>L&iacute;der del Grupo</p>
            </td>
            <td colspan="3"></td>
          </tr>
          <tr>
            <td class="bg-grey" style="width: 168px;">
              <p>Entidad</p>
            </td>
            <td colspan="3">
              <p>Fuerza A&eacute;rea Colombiana &ndash; SCTeI</p>
            </td>
          </tr>
          <tr>
            <td class="bg-grey" style="width: 168px;">
              <p>VoBo L&iacute;der del Grupo</p>
            </td>
            <td colspan="3"><br/>
              <p class="shadow-text">Firma o aval en documento adjunto del L&iacute;der del Grupo</p>
            </td>
          </tr>
          </tbody>
        </table>
    `;
    groupTables.push(tableEl);
  });
  let directorSignature;
  let subDirectorSignature;
  let commanderSignature;
  let actiManagerSignature;
  let investigatorSignature;

  signatures.forEach((item, index) => {
    switch (item.uniqueName) {
      case "acti-manager-signature":
        actiManagerSignature = item.path;
        break;
      case "commander-signature":
        commanderSignature= item.path;
        break;
      case "director-signature":
        directorSignature = item.path;
        break
      case "sub-director-signature":
        subDirectorSignature = item.path;
        break;
      case "principal-investigator-signature":
        investigatorSignature = item.path;
        break;
    }
  });

  return `
        <style>
         @import url('https://fonts.googleapis.com/css?family=Titillium+Web:400,700');
         * {
          font-family: 'Titillium Web', sans-serif;
          font-size: 10px;
         }
         
         h1 {
          font-size: 1.4em;
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
          
          .signature {
            width: 100%;
            max-width: 100px;
          }
          
          .signature img {
            width: 100%;
          }
          
        </style>
        <div id="project-preview" class="print-section">
          <div>
            <span style="float: right"></span>
            <table>
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
                    <p>FORMATO FORMULACI&Oacute;N PROYECTO DE I+D+i</p>
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
          
          <div class="intern-code">
            <table style="height: 42px; width: 100%">
              <tbody>
              <tr>
                <td class="bg-grey padding" style="width: 133px;">C&oacute;digo Interno</td>
                <td class="padding" style="width: 133px;">FP-____/ 20____</td>
              </tr>
              </tbody>
            </table>
          </div>
          
          <div>
            <table style="height: 231px; width: 100%;">
              <tbody>
        
                <!-- Información General -->
                <tr>
                  <td class="bg-blue bold uppercase" style="width: 583px; text-align: center;">Informaci&oacute;n General</td>
                </tr>
                <tr>
                  <td style="width: 583px;">
                  <table>
                      <tbody>
                      <tr>
                        <td class="bg-grey">
                          <p><span>Unidad/Dependencia</span></p>
                        </td>
                        <td colspan="6">${project.dependency}</td>
                        <td class="bg-grey" colspan="2">
                          <p><span>Fecha</span></p>
                        </td>
                        <td colspan="7">
                          <p class="shadow-text"><span>DD/MM/AAAA</span></p>
                        </td>
                      </tr>
                      <tr>
                        <td class="bg-grey">
                          <p><span>Gestor ACTI</span></p>
                        </td>
                        <td colspan="15">
                          <p>${project.actiManager.profile.names} ${project.actiManager.profile.surname}</p>
                          <!--<p class="shadow-text"><span>Grado y nombre del encargado de la gesti&oacute;n de la CTeI en la Unidad/Dependencia</span></p>-->
                        </td>
                      </tr>
                      <tr>
                        <td class="bg-grey">
                          <p><span>Contactos del Gestor</span></p>
                        </td>
                        <td colspan="3">
                          <p>${project.actiManager.email}</p>
                        </td>
                        <td colspan="7">
                          <p class="shadow-text"><span>Tel&eacute;fono fijo</span></p>
                        </td>
                        <td colspan="5">
                          <p>${project.actiManager.phoneNumber}</p>
                        </td>
                      </tr>
                      <tr>
                        <td class="bg-grey">
                          <p><span>Programa de Investigaci&oacute;n</span></p>
                        </td>
                        <td colspan="15">
                          <p>${project.invProgram.descr}</p>
                          <!-- <p><span>De acuerdo a MOINV 2017 o documento que la sustituya</span></p>-->
                        </td>
                      </tr>
                      <tr>
                        <td class="bg-grey">
                          <p><span>Subprograma de Investigaci&oacute;n&nbsp;</span></p>
                        </td>
                        <td colspan="15">
                        <p>${project.invSubProgram.descr} </p>
                          <!-- <p><span>De acuerdo a MOINV 2017 o documento que la sustituya</span></p>-->
                        </td>
                      </tr>
                      <tr>
                        <td class="bg-grey">
                          <p><span>L&iacute;nea de investigaci&oacute;n</span></p>
                        </td>
                        <td colspan="15"
                          <p>${project.invLine.descr}</p>
                         <!-- <p><span>De acuerdo a MOINV 2017 o documento que la sustituya</span></p>-->
                        </td>
                      </tr>
                      <tr>
                        <td class="bg-grey">
                          <p><span>Quien Avala la Postulaci&oacute;n</span></p>
                        </td>
                        <td colspan="15">
                          <p>${project.invEndorser.descr}</p>
                          <!--<p><span>Grado y nombre del Comandante o Jefe Unidad/Dependencia</span></p>-->
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
          
                <!-- Tipo de Investigación -->
                <tr>
                  <td class="bg-blue bold" style="width: 100%; text-align: center;">
                    <span class="uppercase"> Tipo de Investigaci &oacute;n a Desarrollar</span>
                    (Refi&eacute;rase al Modelo de Investigaci&oacute;n del SEFAC)
                  </td>
                </tr>
                <tr>
                  <td><p class="text-center">${project.invType.descr}</p></td>
                </tr>
          
                <!-- Componente Científico Tecnológico -->
                <tr>
                  <td class="bg-blue bold" style="width: 100%; text-align: center;">
                    <span class="uppercase">Componente Cient&iacute;fico-Tecnol&oacute;gico</span>
                  </td>
                </tr>
          
                <tr>
                  <td style="width: 583px;">
                    <table style="height: 191px; width: 100%;">
                      <tbody>
                        <tr>
                          <td class="bg-grey" style="width: 160px;">Título del Proyecto</td>
                          <td style="width: 430px;">${project.title}</td>
                        </tr>
            
                        <tr>
                          <td class="bg-grey" style="width: 160px;">Duraci&oacute;n</td>
                          <td style="width: 430px;">${project.durationOfMonths} meses</td>
                        </tr>
            
                        <tr>
                          <td class="bg-grey" style="width: 160px;">Lugar de Ejecuci&oacute;n</td>
                          <td style="width: 430px;">${project.placeOfExecution}</td>
                        </tr>
                      
                        <tr>
                          <td class="bg-grey" style="width: 160px;">Grupos de Investigaci&oacute;n</td>
                          <td style="width: 430px;">
                          
                            <p class="shadow-text">Grupo o grupos de investigación pertenecientes al SCTeI de la FAC o a otras instituciones en los cuales está vinculado el proyecto. (Máximo dos, obligatorio uno de la FAC).</p>
                            ${groupTables}
                          </td>
                        </tr>
                        
                        <tr>
                          <td class="bg-grey" style="width: 160px;">Equipo Investigador</td>
                          <td style="width: 430px;">
                            <table>
                              <tbody>
                                <tr>
                                  <th class="bg-grey" style="width:10%">Grado</th>
                                  <th class="bg-grey" style="width:15%">Nombres</th>
                                  <th class="bg-grey" style="width:15%">Apellidos</th>
                                  <th class="bg-grey" style="width:15%">Cargo</th>
                                  <th class="bg-grey" style="width:15%">Dedicacion</th>
                                  <th class="bg-grey" style="width:15%">Grupo</th>
                                </tr>
                                ${invTeamPersonRows}
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        
                        <tr>
                          <td class="bg-grey" style="width: 160px;">Resumen / Abstract</td>
                          <td style="width: 430px;">${project.resume}</td>
                        </tr>
                        
                        <tr>
                          <td class="bg-grey" style="width: 160px;">Palabras Clave</td>
                          <td style="width: 430px;">${keywordsRows}</td>
                        </tr>
                        
                        <tr>
                          <td class="bg-grey" style="width: 160px;">Justificaci&oacute;n, Pertinencia y Oportunidad del Proyecto</td>
                          <td style="width: 430px;">
                          
                          <p class="shadow-text">Describa el qué? Por qué? y para qué? del proyecto.</p>
                          
                            <table style="height: 191px; width: 100%;">
                              <tbody>
                                <tr>
                                  <td class="bg-grey" style="width: 20%;">En qué consiste?</td>
                                  <td style="width: 80%;"></td>
                                </tr>
                                <tr>
                                  <td class="bg-grey" style="width: 20%;">Por qué se requiere?</td>
                                  <td style="width: 80%;"></td>
                                </tr>
                                <tr>
                                  <td class="bg-grey" style="width: 20%;">Para qué desarrollarlo?</td>
                                  <td style="width: 80%;"></td>
                                </tr>
                                <tr>
                                  <td class="bg-grey" style="width: 20%;">Beneficios para la FAC</td>
                                  <td style="width: 80%;">
                                      <p class="shadow-text">Relacione los beneficios esperados del proyecto en términos de ahorro de recursos para la FAC (económicos, personal, tiempo, etc.) o en generación o mejoramiento de sus capacidades (operacionales, logísticas, administrativas, etc.) o de su potencial de Transferencia Tecnológica (regalías por licenciamiento, venta, etc.)</p>
                                  </td>
                                </tr>
                                <tr>
                                  <td class="bg-grey" style="width: 20%;">Indicador ROI</td>
                                  <td style="width: 80%;">
                                      <p class="shadow-text">
                                      Calcule el indicador de retorno sobre la inversión.*
                                      
                                      RoI=Utilidad Neta o GananciaInversión×100%
                                      
                                      *Los valores empleados en el indicador deben estar soportados por estadísticas reales de consumo o proyecciones de la Fuerza e indicar la fuente.
                                      </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td class="bg-grey" style="width: 20%;">VoBo Proceso</td>
                                  <td style="width: 80%;">
                                      <p class="shadow-text">Firma o aval en documento adjunto del Líder del Proceso o su delegado.</p></td>
                                </tr>
                              </tbody>
                            </table>
                           </td>
                        </tr>
                        
                        <tr>
                          <td class="bg-grey" style="width: 160px;">Marco Conceptual</td>
                          <td style="width: 430px;">${project.conceptFramework}</td>
                        </tr>
                        
                        <tr>
                          <td class="bg-grey" style="width: 160px;">Estado del Arte</td>
                          <td style="width: 430px;">${project.artStatus}</td>
                        </tr>
                        
                        <tr>
                          <td class="bg-grey" style="width: 160px;">Resultados Previos de la Investigaci&oacute;n</td>
                          <td style="width: 430px;">${project.prevResults}</td>
                        </tr>
                        
                        <tr>
                          <td class="bg-grey" style="width: 160px;">Pregunta de Investigaci&oacute;n</td>
                          <td style="width: 430px;">${project.info.question}</td>
                        </tr>
                        
                        <tr>
                          <td class="bg-grey" style="width: 160px;">Objetivo General del Proyecto</td>
                          <td style="width: 430px;">${project.generalObj}</td>
                        </tr>
                        
                        <tr>
                          <td class="bg-grey" style="width: 160px;">Objetivos Específicos/td>
                          <td style="width: 430px;">
                            <table>
                              <tr>
                                <th>Descripci&oacute;n</th> 
                              </tr>
                              ${specificObjsRows}
                            </table>
                          </td>
                        </tr>
                        
                        <tr>
                          <td class="bg-grey" style="width: 160px;">Metodología</td>
                          <td style="width: 430px;">${project.methodology}</td>
                        </tr>
                        
                        <tr>
                          <td class="bg-grey" style="width: 160px;">Resultados Esperados</td>
                          <td style="width: 430px;">${project.expectedResults}</td>
                        </tr>
                        
                        <tr>
                          <td class="bg-grey" style="width: 160px;">Productos Esperados</td>
                          <td style="width: 430px;">
                          
                            <p class="shadow-text">Relacione los productos esperados con el desarrollo del Proyecto (Refiérase a la tipología de productos establecida por Colciencias)</p>
                          
                            <table>
                              <tbody>
                              <tr>
                                <td rowspan="2">
                                  <p>Tipo de Producto</p>
                                </td>
                                <td rowspan="2">
                                  <p>Descripci&oacute;n</p>
                                </td>
                                <td colspan="2">
                                  <p>Participaci&oacute;n*&nbsp;</p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p>FAC</p>
                                </td>
                                <td>
                                  <p>OTRA</p>
                                </td>
                              </tr>
                              <tr>
                                <td rowspan="3">
                                  <p>Productos Resultado de Actividades de Generaci&oacute;n de Nuevo Conocimiento</p>
                                </td>
                                <td>
                                  <p>1.</p>
                                </td>
                                <td>
                                  <p class="text-right">%</p>
                                </td>
                                <td>
                                  <p class="text-right">%</p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p>2.</p>
                                </td>
                                <td>
                                  <p class="text-right">%</p>
                                </td>
                                <td>
                                  <p class="text-right">%</p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p>3&hellip;</p>
                                </td>
                                <td>
                                  <p class="text-right">%</p>
                                </td>
                                <td>
                                  <p class="text-right">%</p>
                                </td>
                              </tr>
                              <tr>
                                <td rowspan="3">
                                  <p>Productos Resultado de Actividades de Desarrollo Tecnol&oacute;gico e Innovaci&oacute;n</p>
                                </td>
                                <td>
                                  <p>1.</p>
                                </td>
                                <td>
                                  <p class="text-right">%</p>
                                </td>
                                <td>
                                  <p class="text-right">%</p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p>2.</p>
                                </td>
                                <td>
                                  <p class="text-right">%</p>
                                </td>
                                <td>
                                  <p class="text-right">%</p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p>3&hellip;</p>
                                </td>
                                <td>
                                  <p class="text-right">%</p>
                                </td>
                                <td>
                                  <p class="text-right">%</p>
                                </td>
                              </tr>
                              <tr>
                                <td rowspan="3">
                                  <p>Productos Resultado de Actividades de Apropiaci&oacute;n Social del Conocimiento</p>
                                </td>
                                <td>
                                  <p>1.</p>
                                </td>
                                <td>
                                  <p class="text-right">%</p>
                                </td>
                                <td>
                                  <p class="text-right">%</p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p>2.</p>
                                </td>
                                <td>
                                  <p class="text-right">%</p>
                                </td>
                                <td>
                                  <p class="text-right">%</p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p>3&hellip;</p>
                                </td>
                                <td>
                                  <p class="text-right">%</p>
                                </td>
                                <td>
                                  <p class="text-right">%</p>
                                </td>
                              </tr>
                              <tr>
                                <td rowspan="3">
                                  <p>Productos de Actividades Relacionadas con la Formaci&oacute;n de Recurso Humano para la CTeI</p>
                                </td>
                                <td>
                                  <p>1.</p>
                                </td>
                                <td>
                                  <p class="text-right">%</p>
                                </td>
                                <td>
                                  <p class="text-right">%</p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p>2.</p>
                                </td>
                                <td>
                                  <p class="text-right">%</p>
                                </td>
                                <td>
                                  <p class="text-right">%</p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p>3&hellip;</p>
                                </td>
                                <td>
                                  <p class="text-right">%</p>
                                </td>
                                <td>
                                  <p class="text-right">%</p>
                                </td>
                              </tr>
                              </tbody>
                            </table>
                            
                            <p class="shadow-text">Porcentaje de titularidad de la Propiedad Intelectual de las instituciones participantes del proyecto para cada uno de los productos esperados. Cuando los resultados del proyecto de investigación a desarrollar se consideren temas de Defensa y Seguridad Nacional, los derechos de Propiedad Intelectual serán exclusivamente del Ministerio de Defensa.</p>
                          </td>
                        </tr>
                        
                        <tr>
                          <td class="bg-grey" style="width: 160px;">Estructura de Trabajo para el Desarrollo de 
                          Productos</td>
                          <td style="width: 430px;">
                              <p class="shadow-text">Diseñe y adjunte la Estructura Desagregada de Actividades (WBS) requerida para obtener los productos esperados, definiendo para cada una de ellas, la duración, fecha de inicio y término, recursos humanos, recursos financieros, equipos, infraestructura, herramientas, etc. Ésta WBS debe ser soporte de los costos del proyecto y debe coincidir con el formato presupuesto detallado proyecto de I+D+i (GH-JEA-FR-012).</p>
                          </td>
                        </tr>
                        
                         <tr>
                          <td class="bg-grey" style="width: 160px;">Implicaciones Éticas y  Ambientales</td>
                          <td style="width: 430px;">${project.info.envImpact}</td>
                        </tr>
                        
                        <tr>
                          <td class="bg-grey" style="width: 160px;">Riesgos del Proyecto</td>
                          <td style="width: 430px;">
                          
                            <table style="width: 100%;">
                              <tbody>
                                <tr style="height: 25px;">
                                  <td style="width: 12.5502%; height: 25px;">Id</td>
                                  <td style="width: 26.5562%; height: 25px;">Descripción</td>
                                  <td style="width: 32.9317%; height: 25px;">Consecuencias</td>
                                  <td style="width: 27.9619%; height: 25px;">Acción Sugerida</td>
                                </tr>
                                <tr style="height: 21px;">
                                  <td style="width: 12.5502%; height: 21px;">1..</td>
                                  <td style="width: 26.5562%; height: 21px;"></td>
                                  <td style="width: 32.9317%; height: 25px;"></td>
                                  <td style="width: 27.9619%; height: 21px;"></td>
                                </tr>
                                <tr style="height: 21px;">
                                  <td style="width: 12.5502%; height: 21px;">2..</td>
                                  <td style="width: 26.5562%; height: 21px;"></td>
                                  <td style="width: 32.9317%; height: 25px;"></td>
                                  <td style="width: 27.9619%; height: 21px;"></td>
                                </tr>
                                <tr style="height: 21px;">
                                  <td style="width: 12.5502%; height: 21px;">..</td>
                                  <td style="width: 26.5562%; height: 21px;"></td>
                                  <td style="width: 32.9317%;"></td>
                                  <td style="width: 27.9619%; height: 21px;"></td>
                                </tr>
                                <tr style="height: 24px;">
                                  <td style="width: 12.5502%; height: 24px;">n</td>
                                  <td style="width: 26.5562%; height: 24px;"></td>
                                  <td style="width: 32.9317%; height: 25px;"></td>
                                  <td style="width: 27.9619%; height: 24px;"></td>
                                </tr>
                              </tbody>
                            </table>
  
                             <p class="shadow-text">Descripción: Describa de manera breve y clara los posibles riesgos que afecten la ejecución del proyecto.
                            Consecuencias: Proyecte los problemas o dificultades que pueden presentarse por la materialización del riesgo en la ejecución del proyecto.
                            Acción Sugerida: Describa las acciones propuestas para evitar la materialización del riesgo o para mitigar el impacto de la ocurrencia del mismo.
                            </p>
                          </td>
                        </tr>
                        
                        <tr>
                          <td class="bg-grey" style="width: 160px;">Bibliografía</td>
                          <td style="width: 430px;">
                              <table>
                                <tr>
                                  <th>Descripci&oacute;n</th> 
                                </tr>
                                
                                ${biblioRows}
                             </table>
                          </td>
                        </tr>
                       
                      </tbody>
                    </table>
                  </td>
                </tr>
                
                <!-- Componente Presupuestal -->
                <tr>
                  <td class="bg-blue bold" style="width: 100%; text-align: center;">
                    <span class="uppercase">Componente Presupuesta</span>
                  </td>
                </tr>
                <tr>
                
                  <td style="width: 583px;">
                    <table style="height: 191px; width: 100%;">
                       <tbody>
                          <tr>
                            <td class="bg-grey" style="width: 160px;">Costos del Proyecto</td>
                            <td style="width: 430px;">
                              <p class="shadow-text">Relacione el tipo y valor de los recursos requeridos por el proyecto (en pesos)</p>
                            
                              
                                <table width="576" height="497">
                                <tbody>
                                <tr>
                                  <td class="bg-grey" rowspan="2" style="width: 434px;">
                                    <p>Rubro</p>
                                  </td>
                                  <td class="bg-grey" colspan="2" style="width: 141px;">
                                    <p>Tipo y Valor</p>
                                  </td>
                                </tr>
                                <tr>
                                  <td class="bg-grey" style="width: 72px;">
                                    <p>Efectivo</p>
                                  </td>
                                  <td class="bg-grey" style="width: 69px;">
                                    <p>Especie</p>
                                  </td>
                                </tr>
                                
                                ${entriesRows}
                                <tr>
                                  <td class="bg-grey" style="width: 434px;">
                                    <p class="bold">Subtotal por Tipo de Recurso</p>
                                  </td>
                                  <td style="width: 72px;">
                                    <p><span>${currency(totalEntryCash)}</span></p>
                                  </td>
                                  <td style="width: 69px;">
                                    <p><span>${currency(totalEntryEspecies)}</span></p>
                                  </td>
                                </tr>
                                <tr>
                                  <td class="bg-grey" style="width: 434px;">
                                    <p class="bold">Total Proyecto</p>
                                  </td>
                                  <td colspan="2" style="width: 141px;">
                                    <p><span>${currency(totalProject)}</span></p>
                                  </td>
                                </tr>
                                </tbody>
                              </table>
                              
                               <p class="shadow-text">*Monto máximo a financiar hasta el 20% del valor aportado en efectivo.</p>
                                <p class="shadow-text">** Monto máximo a financiar hasta el 25% del valor aportado en efectivo.</p>
                                <p class="shadow-text">*** Monto máximo a financiar hasta el 5% del valor aportado en efectivo.</p>
                            </td>
                          </tr>
                       </tbody>
                       
                      
                    </table>
                    
                 
                  </td>
                 </tr>
                 
                <tr>
                  <td style="width: 583px;">
                    <table style="height: 50px; width: 100%;">
                      <tbody>
                      <tr>
                        <td class="bg-grey" style="width: 160px;">Posibles Fuentes de Financiaci&oacute;n del Proyecto</td>
                        <td style="width: 430px;">
                          <p class="shadow-text">
                            Relacione las posibles fuentes de financiación identificadas a las cuales puede postularse el proyecto indicando el punto de contacto o de información de la entidad.
                          </p>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                <!-- Formalización del Proyecto -->
                <tr>
                  <td class="bg-blue bold" style="width: 100%; text-align: center;">
                    <span class="uppercase">Formalización del Proyecto</span>
                  </td>
                </tr>
               
                <tr>
                  <td>
                  <table>
                    <tbody>
                      <tr style="height: 50px">
                        <td class="bg-grey" style="width: 160px;">
                          <p>Investigador&nbsp;</p>
                          <p>Principal Titular</p>
                        </td>
                        <td style="width: 430px;">
                         <div class="signature">
                          <img src="${investigatorSignature}" alt="">
                          </div>
                          <p class="shadow-text text-center">Firma y Postfirma</p>
                        </td>
                      </tr>
                      
                      <tr style="height: 50px">
                        <td class="bg-grey" style="width: 160px;">
                          <p>Gestor ACTI</p>
                        </td>
                        <td style="width: 430px;">
                        <div class="signature">
                          <img src="${actiManagerSignature}" alt="">
                          </div>
                          <p class="shadow-text text-center">Firma y Postfirma</p>
                        </td>
                      </tr>
                      
                      <tr style="height: 50px">
                        <td class="bg-grey" style="width: 160px;">
                          <p>Comandante</p>
                          <p>Unidad/Jefe</p>
                          <p>Dependencia</p>
                        </td>
                        <td style="width: 430px;">
                        <div class="signature">
                          <img src="${commanderSignature}" alt="">
                          </div>
                          <p class="shadow-text text-center">Firma y Postfirma</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                 </td>
                </tr>
                
                <!-- Revisión Jea-Dicti -->
                <tr>
                  <td class="bg-blue bold" style="width: 100%; text-align: center;">
                    <span class="uppercase">Revisión Jea-Dicti</span>
                  </td>
                </tr>
                
                <tr>
                  <td>
                    <table>
                      <tbody>
                      <tr>
                        <td class="bg-grey" colspan="13">
                          <p><span>El Proyecto se alinea con la Pol&iacute;tica de CTeI establecida en el Modelo de Investigaci&oacute;n del SEFAC?</span></p>
                        </td>
                        <td>
                          <p><span>SI</span></p>
                        </td>
                        <td colspan="2">
                          <p><span>NO</span></p>
                        </td>
                      </tr>
                      <tr>
                        <td class="bg-grey" colspan="13">
                          <p><span>El Proyecto est&aacute; vinculado a uno de los Grupos de Investigaci&oacute;n del SCTeI de la FAC?</span></p>
                        </td>
                        <td>
                          <p><span>SI</span></p>
                        </td>
                        <td colspan="2">
                          <p><span>NO</span></p>
                        </td>
                      </tr>
                      <tr>
                        <td class="bg-grey" colspan="12">
                          <p><span>Se cuenta con Convenio vigente con la otra instituci&oacute;n part&iacute;cipe del proyecto?</span></p>
                        </td>
                        <td>
                          <p><span>N/A</span></p>
                        </td>
                        <td>
                          <p><span>SI</span></p>
                        </td>
                        <td colspan="2">
                          <p><span>NO</span></p>
                        </td>
                      </tr>
                      <tr>
                        <td class="bg-grey" colspan="13">
                          <p><span>La distribuci&oacute;n de la Propiedad Intelectual de los productos esperados es acorde con la pol&iacute;tica vigente?&nbsp;</span></p>
                        </td>
                        <td>
                          <p><span>SI</span></p>
                        </td>
                        <td colspan="2">
                          <p><span>NO</span></p>
                        </td>
                      </tr>
                      <tr>
                        <td class="bg-grey" colspan="8">
                          <p><span>El proyecto se env&iacute;a a evaluaci&oacute;n por pares acad&eacute;micos</span></p>
                        </td>
                        <td colspan="4">
                          <p><span>INTERNOS</span></p>
                        </td>
                        <td colspan="2">
                          <p><span>EXTERNOS</span></p>
                        </td>
                        <td colspan="2">
                          <p><span>N/A</span></p>
                        </td>
                      </tr>
                      <tr>
                        <td class="bg-grey" colspan="13">
                          <p><span>El proyecto requiere ajustes en su formulaci&oacute;n</span></p>
                        </td>
                        <td>
                          <p><span>SI</span></p>
                        </td>
                        <td colspan="2">
                          <p><span>NO</span></p>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                <!-- Concepto -->
                <tr>
                  <td class="bg-blue bold" style="width: 100%; text-align: center;">
                    <span class="uppercase">Concepto</span>
                  </td>
                </tr>
                
                <tr>
                  <td>
                    <table>
                      <tbody>
                      <tr class="bg-grey">
                        <td colspan="13">
                          <p><span>El proyecto es validado para ser postulado para financiaci&oacute;n interna o externa</span></p>
                        </td>
                        <td>
                          <p><span>SI</span></p>
                        </td>
                        <td colspan="2">
                          <p><span>NO</span></p>
                        </td>
                      </tr>
                      <tr>
                        <td class="bg-grey" colspan="2">
                          <p><span>Subdirector DICTI</span></p>
                        </td>
                        <td colspan="3"><br /><br /><br />
                           <div class="signature"><div>
                            <img src="${subDirectorSignature}" alt="">
                            </div>
                          <p><span>Firma y Postfirma</span></p>
                        </td>
                        <td class="bg-grey" colspan="5">
                          <p><span>Director DICTI</span></p>
                        </td>
                        <td colspan="6"><br /><br /><br />
                            <div class="signature">
                            <img src="${directorSignature}" alt="">
                            </div>
                            <p><span>Firma y Postfirma</span></p>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
         
        </div>
        `;
};

module.exports = {
  buildHtml
};
