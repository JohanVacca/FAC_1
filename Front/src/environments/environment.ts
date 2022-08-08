export const Api = {
  //api: 'https://gestion-de-proyectos-fac.herokuapp.com/' // PROD SERVICES
  api: 'http://localhost:8080/' //SERVICES LOCAL
};

export const environment = {
  //api_url: 'https://gestion-de-proyectos-fac.herokuapp.com/', //SERVICIOS PRODUCCION
  api_url: 'http://localhost:8080/', //LOCAL SERVICES
  apiUrl: `${Api.api}api/`,
  production: false,
  secretKey: 'BZEEOGKFYK',
};
