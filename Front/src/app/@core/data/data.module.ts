import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectricityService } from './electricity.service';
import { StateService } from './state.service';
import { SmartTableService } from './smart-table.service';
import { PlayerService } from './player.service';
import { RecursosService } from './recursos.service';
import { RolesService } from './rol.service';
import { OpcionesService } from './opciones.service';
import { PresupuestoService } from './presupuesto.service';
import { TableproductService } from './table-product.service';
import { PersonaService } from './persona.service';
import { ProgramService } from './program.service';
import { SubprogramService } from './subprogram.service';
import { LineService } from './line.service';
import { TypeInvestigationService } from './type-investigation.service';
import { EndorsementInvestigationService } from './endorsement-investigation.service';
import { RubroService } from './rubro.service';
import { InvestigationService } from './investigation.service';
import { ObjetiveGeneralService } from './objetive.service';
import { ObjetiveSpecificService } from './objetive-specific.service';
import { ResourceService } from './recurso.service';
import { DetallePresupuestoService } from './detalle-presupuesto.service';
import { ConvocatoryService } from './convocatory.service';
import { FormulacionService } from './formulation.service';
import { GroupService } from './group.service';
import { TeamIntegrantService } from './team-integrant.service';

const SERVICES = [
  ElectricityService,
  StateService,
  SmartTableService,
  PlayerService,
  RecursosService,
  RolesService,
  OpcionesService,
  PresupuestoService,
  TableproductService,
  PersonaService,
  ProgramService,
  SubprogramService,
  LineService,
  TypeInvestigationService,
  EndorsementInvestigationService,
  RubroService,
  InvestigationService,
  ObjetiveGeneralService,
  ObjetiveSpecificService,
  ResourceService,
  DetallePresupuestoService,
  ConvocatoryService,
  FormulacionService,
  GroupService,
  TeamIntegrantService
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class DataModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: DataModule,
      providers: [
        ...SERVICES,
      ],
    } as ModuleWithProviders<any>;
  }
}
