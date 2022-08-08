import {Actividad} from '../services/saveStateService/StateInterface';

export interface cronogramaObj {
    proyectId?: string;
    ConvocatoriaId: string;
    actividades: Actividad[];
}
