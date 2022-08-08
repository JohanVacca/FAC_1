# fuac-backend

## Configuración base de datos
En el archivo **app.js** se encuentra comentado la conexión a la base de datos de producción. La constante **MONGO_DB** seria la dirección de la base de datos.

- La conexión a la base de datos local tiene un comentario que indica donde inicia y finaliza dicha configuración, si se va a levantar el proyecto en local es necesario comentar la configuración de producción.
- La conexión a la base de datos de producción tiene un comentario que indica donde inicia y finaliza dicha configuración, si se va a desplegar en producción es necesario comentar la configuración de local.

## Data por defecto
Por defecto si el proyecto no tiene ninguna configuración genera los siguientes roles:

- Administrador
- Investigador
- Evaluador
- Comandante
- Sub-Director
- Director
- Jefe De Centro

Los siguientes rubros:

- Personal Cientifico
- Servicios Tecnicos
- Equipos
- Materiales e Insumos
- Adecuacion de Infraestructura
- Software
- Salidas de Campo
- Eventos Academicos
- Publicaciones
- Gastos de propiedad intelectual
- bibleografia
- Gastos Operativos y/o Administrativos
- Seguimiento y divulgacion
- Apoyo logistico
- Capacitaciones
- Membresias a sociedades cientificas
- Certificaciones
- Otros

## Levantar proyecto en local
Para levantar el proyecto backend en local correr los siguientes comandos en diferentes terminales y en este orden:
- mongo
- mongod --dbpath <PATH DEL PROYECTO>
- npm run start:dev


Requisitos Backend
• Conocimientos en Node JS
• Conocimiento en MongoDB
• Conocimiento en Express
• Conocimiento en REST API
• NodeJS 14.17.0
• MongoDB
Versión de Backend construida sobre NodeJS usando versión 14.17.0 y base de datos MongoDB
Esta versión de Backend es usadas librerías como
• express
• mongoose
y sus peticiones están protegidas con un token bajo la librería jwt.middleware

Para iniciar el proyecto se deben instalar los paquetes necesarios en el package.json "npm install"

Para su despliegue en producción se requiere modificar la cadena de conexión en el archivo app.js "localConnection” una vez inicie la APP se creará la BD según posterior a esta modificación se procede a arrancar el servidor con el comando "npm run start"

inicialmente se requiere crear los roles en la Base de datos
db.getCollection('roles').insertMany([ {name: 'Administrador', description: '' }, {name: 'Investigador', description: '' }, {name: 'Evaluador', description: '' }, {name: 'Estrategico', description: '' }, {name: 'Operacional1', description: '' }, {name: 'Operacional2', description: '' }, ]);

Luego se debe tomar el id del administrador para crear un usuario con el rol de “Administrador” con el Endpoint: http: //Urlservidor/api /auth /register
Data:
En donde la informacion se encierra con ${} debe colocar la informacion correspondiente sin alterar el JSON
{“email": "${correo}", "password": "${password}", "profile" : { "names": "{Nombre}", "surname": "${Admin}" }, "role": "${idRole}", "isActive": true}
De la misma manera puede crea los demás roles cambiando el idRole
Una vez creado el administrador puede ingresar al Frontend con las credenciales

JavaScript
91.4%
HTML
8.6%
