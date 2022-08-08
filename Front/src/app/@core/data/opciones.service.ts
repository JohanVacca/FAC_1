import { Injectable } from '@angular/core';

@Injectable()
export class OpcionesService {

  data = [{
    id: 1,
    firstName: 'Imprimir Formulario',
    lastName: 'ImageButtonImprime',
  }, {
    id: 2,
    firstName: 'Buscar dentro de la tabla',
    lastName: 'ImageButtonBuscar',
  }, {
    id: 3,
    firstName: 'Crear nuevo Registro',
    lastName: 'ImageButtonNuevo',
  }, {
    id: 4,
    firstName: 'Ver Registros Eliminados',
    lastName: 'ImageButtonVerEliminados',
  }, {
    id: 5,
    firstName: 'Ayuda',
    lastName: 'ImageButtonAyuda',
  }, {
    id: 6,
    firstName: 'Salir del Formulario',
    lastName: 'ImageButtonsalir',
  }, {
    id: 7,
    firstName: 'Modificar Registro',
    lastName: 'ImageButton1',
  }, {
    id: 8,
    firstName: 'Eliminar Registro',
    lastName: 'ImageButton2',
  }, {
    id: 9,
    firstName: 'Grabar Cuando Modifica Registro',
    lastName: 'ImageButton3',
  }, {
    id: 10,
    firstName: 'Cancelar Modificando Registro',
    lastName: 'ImageButton4',
  }];

  getData() {
    return this.data;
  }
}