function currency(value) {
  const numFixed = value.toFixed(2);
  const cop = numFixed.replace(/\./g, ',');
  return 'COP ' + cop.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

function buildHtml(project, invTeamPersons = [], groups = []) {

  return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Formato de Bienes y Servicios</title>
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
            <td colspan="25">
              <p class="bg-blue bold uppercase text-center">INFORMACI&Oacute;N GENERAL</p>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <p>Administrador de los recursos:</p>
            </td>
            <td colspan="11">
              <p>Nombre entidad</p>
            </td>
            <td colspan="8">
              <p>Convenio:</p>
            </td>
            <td colspan="4">
              <p>N&uacute;mero convenio</p>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <p>Fecha de Solicitud:</p>
            </td>
            <td colspan="5">
              <p>AA/MM/DD</p>
            </td>
            <td colspan="6">
              <p>Nombre Proyecto:</p>
            </td>
            <td colspan="12">
              <p>T&iacute;tulo Proyecto</p>
            </td>
          </tr>
          <tr>
            <td colspan="25">
              <p class="bg-blue bold uppercase text-center">OTROS BIENES Y SERVICIOS</p>
            </td>
          </tr>
          <tr>
            <td colspan="9">
              <p>Tipo de Requerimiento:</p>
            </td>
            <td colspan="7">
              <p>Contrataci&oacute;n Bienes</p>
            </td>
            <td></td>
            <td colspan="7">
              <p>Contrataci&oacute;n Servicios</p>
            </td>
            <td></td>
          </tr>
          <tr>
            <td rowspan="2">
              <p>Rubro:</p>
            </td>
            <td colspan="24">
              <p>Relacione de acuerdo a los rubros del proyecto</p>
            </td>
          </tr>
          <tr>
            <td colspan="5">
              <p>Valor Financiado</p>
            </td>
            <td colspan="4">
              <p>$</p>
            </td>
            <td colspan="4">
              <p>Valor en compromiso</p>
            </td>
            <td colspan="4">
              <p>$</p>
            </td>
            <td colspan="4">
              <p>Valor Disponible</p>
            </td>
            <td colspan="3">
              <p>$</p>
            </td>
          </tr>
          <tr>
            <td colspan="12">
              <p>Valor Estimado del Bien o Servicio:</p>
            </td>
            <td colspan="13">
              <p>$</p>
            </td>
          </tr>
          <tr>
            <td colspan="3">
              <p>Lugar de Entrega</p>
            </td>
            <td colspan="9">
              <p>XXX</p>
            </td>
            <td colspan="8">
              <p>Fecha Requerida de Entrega:</p>
            </td>
            <td colspan="5">
              <p>XX</p>
            </td>
          </tr>
          <tr>
            <td colspan="25">
              <p class="bg-blue bold uppercase text-center">INFORMACI&Oacute;N CONTRACTUAL&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td colspan="4">
              <p>Objeto del Contrato:</p>
            </td>
            <td colspan="21"></td>
          </tr>
          <tr>
            <td colspan="4">
              <p>Condiciones de Contrataci&oacute;n:</p>
            </td>
            <td colspan="21"></td>
          </tr>
          <tr>
            <td colspan="4">
              <p>Tiempo Requerido de Ejecuci&oacute;n para el Contrato:</p>
            </td>
            <td colspan="21"></td>
          </tr>
          <tr>
            <td colspan="25">
              <p class="bg-blue bold uppercase text-center">FICHA T&Eacute;CNICA DEL BIEN O SERVICIO A CONTRATAR</p>
            </td>
          </tr>
          <tr>
            <td colspan="25">
              <p><i><span style="font-weight: 400;">Descripci&oacute;n de la necesidad</span></i></p>
            </td>
          </tr>
          <tr>
            <td colspan="4">
              <p>Articulo a Adquirir</p>
            </td>
            <td colspan="7">
              <p>Unidad de Medida</p>
            </td>
            <td colspan="8">
              <p>Cantidad</p>
            </td>
            <td colspan="6">
              <p>Observaciones</p>
            </td>
          </tr>
          <tr>
            <td colspan="4">
              <p><i><span style="font-weight: 400;">xxx</span></i></p>
            </td>
            <td colspan="7">
              <p><i><span style="font-weight: 400;">xxx</span></i></p>
            </td>
            <td colspan="8">
              <p><i><span style="font-weight: 400;">xxx</span></i></p>
            </td>
            <td colspan="6">
              <p><i><span style="font-weight: 400;">xxx</span></i></p>
            </td>
          </tr>
          <tr>
            <td colspan="4">
              <p>Cantidades a Solicitar:</p>
            </td>
            <td colspan="7">
              <p><i><span style="font-weight: 400;">xx</span></i></p>
            </td>
            <td colspan="8">
              <p>Anexos:</p>
            </td>
            <td colspan="6">
              <p><i><span style="font-weight: 400;">xx</span></i></p>
            </td>
          </tr>
          <tr>
            <td colspan="25">
              <p class="bg-blue bold uppercase text-center">INFORMACI&Oacute;N ADICIONAL RELEVANTE&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td colspan="25">
              <p><i><span style="font-weight: 400;">Presentaci&oacute;n de los documentos de evidencia de la experiencia, entrevista t&eacute;cnica, estudio de seguridad y firma de formatos de confidencialidad.</span></i></p>
            </td>
          </tr>
          <tr>
            <td colspan="25">
              <p class="bg-blue bold uppercase text-center">INFORMACI&Oacute;N DE POSIBLES PROVEEDORES&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td colspan="8">
              <p>Nombre Persona o Raz&oacute;n Social&nbsp;</p>
            </td>
            <td colspan="17">
              <p><i><span style="font-weight: 400;">XXX</span></i></p>
            </td>
          </tr>
          <tr>
            <td colspan="8">
              <p>Departamento</p>
            </td>
            <td colspan="7">
              <p><i><span style="font-weight: 400;">XXX</span></i></p>
            </td>
            <td colspan="8" rowspan="2">
              <p>Tel&eacute;fonos de contacto:</p>
            </td>
            <td colspan="2">
              <p><i><span style="font-weight: 400;">XXX</span></i></p>
            </td>
          </tr>
          <tr>
            <td colspan="8">
              <p>Ciudad</p>
            </td>
            <td colspan="7">
              <p><i><span style="font-weight: 400;">XXX</span></i></p>
            </td>
            <td colspan="2">
              <p><i><span style="font-weight: 400;">&nbsp;XXX</span></i></p>
            </td>
          </tr>
          <tr>
            <td colspan="8">
              <p>Direcci&oacute;n&nbsp;</p>
            </td>
            <td colspan="17">
              <p><i><span style="font-weight: 400;">XXX</span></i></p>
            </td>
          </tr>
          <tr>
            <td colspan="25">
              <p class="bg-blue bold uppercase text-center">AUTORIZACIONES</p>
            </td>
          </tr>
          <tr>
            <td colspan="5">
              <p>Solicit&oacute;:<br />Investigador Principal</p>
            </td>
            <td colspan="20">
              <p><br />GRADO NOMBRES Y APELLIDOS</p>
              <p>Investigador Principal</p>
            </td>
          </tr>
          <tr>
            <td colspan="5">
              <p>Revis&oacute;:<br />Jefe Centro I+D+i</p>
            </td>
            <td colspan="20">
              <p><br />GRADO NOMBRES Y APELLIDOS</p>
              <p>Jefe Centro (CETIA, CETAD, CITAE, CIBAE)</p>
            </td>
          </tr>
          <tr>
            <td colspan="5">
              <p>Revis&oacute;:<br />Director DICTI</p>
            </td>
            <td colspan="20">
              <p>GRADO NOMBRES Y APELLIDOS</p>
              <p>Director Ciencia, Tecnolog&iacute;a e Innovaci&oacute;n</p>
            </td>
          </tr>
          <tr>
            <td colspan="5">
              <p>Aprob&oacute;:<br />Jefe JEA</p>
            </td>
            <td colspan="20">
              <p>GRADO NOMBRES Y APELLIDOS</p>
              <p>Jefe Educaci&oacute;n Aeron&aacute;utica</p>
            </td>
          </tr>
          <tr>
            <td colspan="5">
              <p>Tr&aacute;mite Administrador:</p>
            </td>
            <td colspan="20">
              <p>NOMBRES Y APELLIDOS</p>
              <p>Cargo</p>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
  </html>`;
};

module.exports = {
  buildHtml
};
