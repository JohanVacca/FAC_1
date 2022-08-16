export const MENU_ADMIN_ITEMS = [
    {name: 'Inicio', route: '/pages', icon: 'home'},
    {name: 'Usuarios', route: 'adminusers', icon: 'people_alt'},
    {name: 'Convenios', route: 'admin/convocatoria', icon: 'date_range'},
    {name: 'Instructivos', route: 'instructional', icon: 'text_snippet'},
    {name: 'Tabla de Honorarios', route: 'honorarios', icon: 'table'},
    {name: 'Firmas', route: 'firmas', icon: 'border_color'},
    {name: 'Centros de investigacion', route: 'centros-de-investigacion', icon: 'assured_workload'},
    {name: 'Unidades', route: 'unidades', icon: 'business'}
];
export const MENU_INVESTIGADOR_ITEMS = [
    {name: 'Inicio', route: '/pages', icon: 'home'},
    {name: 'Convenios', route: 'formulacion', icon: 'addchart'},
    {name: 'Instructivos', route: 'instructional', icon: 'date_range'},
    {name: 'Mis proyectos', route: 'evaluacion', icon: 'text_snippet'},
    {name: 'Lista de Seguimientos', route: 'seguimiento', icon: 'list'}
];
export const MENU_EVALUATOR_ITEMS = [
    {name: 'Inicio', route: '/pages', icon: 'home'},
    {name: 'Instructivos', route: 'instructional', icon: 'date_range'},
    {name: 'Evaluacion', route: 'evaluacion', icon: 'text_snippet'},
    {name: 'Firmas', route: 'firmas', icon: 'border_color'}
];
/* A constant that is being exported. */
export const MENU_RESPONSABLE_ITEMS = [
    {name: 'Inicio', route: '/pages', icon: 'home'},
    {name: 'Necesidades', route: 'necesidades', icon: 'help_outline'} //Ejemplo ruta
];

export const MENU_SUBDIR_ITEMS = [
    {name: 'Inicio', route: '/pages', icon: 'home'},
    {name: 'Propiedad intelectual', route: 'propiedad-intelectual', icon: 'text_snippet'} //SUBDIRECTOR PROPIEDAD INT
];      //PODRIAMOS INDICAR CON UN ICONO EXTRA EN PROPIEDADES LA ALERTA... IMPORTAR EN EL TS LOS CRONOGRAMAS PARA CONTARLOS DE 0 A 75 Y SIN PROTEGER COMO YA LO HEMOS HECHO
