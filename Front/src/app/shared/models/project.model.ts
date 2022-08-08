import {
    Entidad,
    Grupo,
    ObjetivoEspecifico,
    PerfilInvestigador,
    Planteamiento, Riesgo
} from '../services/saveStateService/StateInterface';

export interface Proyect {
    AgregarDetallesRubros?: AgregarDetallesRubros[];
    Convocatoria?: string;
    Entidades?: Entidad[];
    EquipoInvestigaciones?: EquipoInvestigacion[];
    ProyectoBloqueado?: boolean;
    Seguimiento?: boolean;
    UserId?: string;
    ValorTotal?: number;
    bibliografias?: bibliografia[];
    calificaciones?: Calificaciones;
    date?: string;
    estadoArte?: string;
    firmas?: FirmasInterface[];
    grupos?: Grupo[];
    informaciones?: informacion[];
    iniciarProyecto?: iniciarProyecto;
    marcoConceptual?: string;
    metodologia?: string;
    objetivoGeneral?: string;
    objetivosEspecificos?: ObjetivoEspecifico[];
    palabraClaves?: palabraClaves[];
    planteamiento?: Planteamiento;
    productosEsperados?: productosEsperados[];
    resultadosEsperados?: string;
    resultadosPrevios?: string;
    resumen?: string;
    evaluadorId?: string;
    riesgos?: Riesgo[];
}

export interface productosEsperados {
    descripcion: string;
    partFuerza: number;
    partOtros: number;
    rubroRelacionado: string;
    tipoProducto: string;
}

export interface palabraClaves {
    palabra: string;
}

export interface objetivosEspecifico {
    descr: string;
}

export interface bibliografia {
    bibliografia: string;
}

export interface informacion {
    impacto: string;
    nInvestigacion: string;
    pregunta: string;
}

export interface iniciarProyecto {
    comandante: string;
    nombreProyecto: string;
    telefonoGestor: number;
    dependencia: string;
    email: string;
    gestor: string;
    lugar: string;
    duracion: number;
    linea: string;
    modelo: string;
    programa: string;
    subprograma: string;
    avala: string;
    centroDeInvestigacion?: string;
    gestorId?: string;
}

export interface AgregarDetallesRubros {
    Descripcion?: string;
    DuracionEnMeses?: number;
    EntidadesCostos?: number;
    Experiencia?: string;
    Formacion?: string;
    HorasSemanales?: number;
    Justificacion?: string;
    NombreDelInvestigador?: string;
    NombreRubro?: string;
    PerfilDelInvestigador?: PerfilInvestigador;
    RolDelInvestigador?: string;
    idRubro?: string;
    entidad?: string;
    tipoDeRubro?: string;
    TotalEfectivo?: number;
    Cumplimiento?: number;
    PresupuestoEjecutado?: number;
    _id?: string;
    listaRubros?: ListaRubros[];
}

export interface ListaRubros {
    rubro?: number;
    factura?: any;
}

export interface EquipoInvestigacion {
    nombres: string;
    apellido: string;
    identificacion: number;
    grupos: string;
    grado: string;
    dedicacion: string;
    cargo: string;
}

export interface Calificaciones {
    idEv?: string;
    ValorParcial?: number;
    Evaluado?: boolean;
    Valores?: {
        vlrequipo: number;
        vlrestado: number;
        vlrmarco: number;
        vlrobjEspecifico: number;
        vlrobjGeneral: number;
        vlrpalabrasClaves: number;
        vlrproyecto: number;
        vlrresumen: number;
        vlrunidadependencia: number;
    };
}

export interface FirmasInterface {
    name: string;
    idQuienFirma: string;
    status: boolean;
}
