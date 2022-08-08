//CONEXIÓN A LOCAL
// const mongoose = require('mongoose');

// const dbConnection = async () => {
//     var mongoose = require('mongoose');
//     mongoose.connect('mongodb://127.0.0.1:27017/fac_db_prod', {
//             useCreateIndex: true,
//             useFindAndModify: false,
//             useNewUrlParser: true
//         }).then(db => console.log('conexion exitosa'))
//         .catch(err => console.log('error: ', err))
// }


// module.exports = {
//     dbConnection
// }
//FIN CONEXIÓN A LOCAL

//CONEXIÓN A PRODUCCIÓN
const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(
            process.env.MONGO_DB,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: true
            }
        )
        console.log('Base de datos online (config)');
    } catch (error) {
        throw new Error('Error iniciando la base de datos');
    }
}


module.exports = {
    dbConnection
}
//FIN CONEXIÓN A PRODUCCIÓN