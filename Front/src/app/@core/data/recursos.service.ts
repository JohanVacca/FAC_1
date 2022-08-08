import { Injectable } from '@angular/core';

@Injectable()
export class RecursosService {

  data = [{
    id: 1,
    firstName: 'Módulo Administrador',
    lastName: '/pages/admin',
  }, {
    id: 2,
    firstName: 'Módulo Administrador Usuarios',
    lastName: '/pages/admin/users',
  }, {
    id: 3,
    firstName: 'Módulo Administrador Roles',
    lastName: '/pages/admin/roles2',
  }, {
    id: 4,
    firstName: 'Módulo Administrador Recursos',
    lastName: '/pages/admin/recursos',
  }, {
    id: 5,
    firstName: 'Módulo Administrador Opciones',
    lastName: '/pages/admin/opciones',
  }, {
    id: 6,
    firstName: 'Módulo Administrador Perfiles',
    lastName: '/pages/admin/perfiles',
  }];

  getData() {
    return this.data;
  }
}
