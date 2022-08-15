const createError = require("http-errors");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const apiBaseUrl = "/api";
const instructivo = require("./api/instructivo/routes/instructivo.routes");
const authRoutes = require("./api/auth/routes/auth.routes");
const userRoutes = require("./api/user/routes/user.routes");
const roleRoutes = require("./api/role/routes/role.routes");
const positionRoutes = require("./api/position/routes/position.routes");
const projectRoutes = require("./api/project/routes/project.routes");
const groupRoutes = require("./api/group/routes/group.routes");
const invTeamPersonRoutes = require("./api/inv-team-person/routes/inv-team-person.routes");
const invTeamPersonPositionRoutes = require("./api/inv-team-person-position/routes/inv-team-person-position.routes");
const expectedProductRoutes = require("./api/expected-product/routes/expected-product.routes");
const projectTypeRoutes = require("./api/product-type/routes/product-type.routes");
const projectEntryRoutes = require("./api/project-entry/routes/project-entry.routes");
const invProgramRoutes = require("./api/inv-program/routes/inv-program.routes");
const invLineRoutes = require("./api/inv-line/routes/inv-line.routes");
const invSubProgramRoutes = require("./api/inv-sub-program/routes/inv-sub-program.routes");
const invEndorserRoutes = require("./api/inv-endorser/routes/inv-endorser.routes");
const invTypeRoutes = require("./api/inv-type/routes/inv-type.routes");
const groupCategoryRoutes = require("./api/group-category/routes/group-category.routes");
const followingRoutes = require("./api/following/routes/following.routes");
const invCenterRoutes = require("./api/inv-center/routes/inv-center.routes");
const useConvocatoria = require("./api/convocatoria/routes/convocatoria.routes");
const useHonorario = require("./api/honorario/routes/honorario.routes");
const proyecIns = require("./api/ProyectIns/routes/instructivo.routes");
const cronograma = require("./api/Cronograma/routes/cronograma.routes");
const firma = require("./api/firma/routes/firma.routes");
const unidadRoutes = require("./api/unidad/routes/unidad.routes");
const necesidadRoutes = require("./api/necesidad/routes/necesidad.routes");
const propiedadintRoutes = require("./api/propiedad-intelectual/routes/propiedadint.routes"); //Propiedadintelectual
const mongoose = require("mongoose");


const app = express();
app.use(cors());

const localConnection = "mongodb://127.0.0.1:27017/fac_db_prod";

const mongodbUri = process.env.MONGODB_URI;

// Conexión a base de datos de producción
const MONGO_DB = 'mongodb+srv://admin:admin@clusterfuerzaaerea.cjgor.mongodb.net/test'
mongoose.connect(
    MONGO_DB,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
    }
).then(() => console.log('Base de datos online'))
    .catch((err) => {
        console.error(`Falla la conexion a la base de datos on line. ${err}`)
    });
// ====> Fin de Conexión a base de datos de producción


// ====> Conexión a base de datos local
// mongoose
//     .set("useFindAndModify", false)
//     .connect(mongodbUri || localConnection, {
//         promiseLibrary: require("bluebird"),
//         useNewUrlParser: true,
//     })
//     .then(() => console.log("connection successful Local"))
//     .catch((err) => console.error(err));
// ====> Fin de Conexión a base de datos local


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "dist/")));
app.use("/", express.static(path.join(__dirname, "dist/")));
app.use(express.static(path.join(__dirname, "/api/instructivoPDF")));
app.use(express.static(path.join(__dirname, "/api/ProyectIns/PDF")));
app.use("/public", express.static("public"));
app.use(bodyParser.urlencoded({extended: true, limit: "50mb"}));
app.use(bodyParser.json({limit: "50mb"}));

app.use(apiBaseUrl, useHonorario);
app.use(apiBaseUrl, proyecIns);
app.use(apiBaseUrl, cronograma);
app.use(apiBaseUrl, useConvocatoria);
app.use(apiBaseUrl, instructivo);
app.use(apiBaseUrl, authRoutes);
app.use(apiBaseUrl, userRoutes);
app.use(apiBaseUrl, roleRoutes);
app.use(apiBaseUrl, positionRoutes);
app.use(apiBaseUrl, projectRoutes);
app.use(apiBaseUrl, groupRoutes);
app.use(apiBaseUrl, invTeamPersonRoutes);
app.use(apiBaseUrl, invTeamPersonPositionRoutes);
app.use(apiBaseUrl, expectedProductRoutes);
app.use(apiBaseUrl, projectTypeRoutes);
app.use(apiBaseUrl, projectEntryRoutes);
app.use(apiBaseUrl, necesidadRoutes);
app.use(apiBaseUrl, propiedadintRoutes); //PROPIEDAD INTELECTUAL
app.use(apiBaseUrl, invProgramRoutes);
app.use(apiBaseUrl, invLineRoutes);
app.use(apiBaseUrl, invSubProgramRoutes);
app.use(apiBaseUrl, invEndorserRoutes);
app.use(apiBaseUrl, invTypeRoutes);
app.use(apiBaseUrl, groupCategoryRoutes);
app.use(apiBaseUrl, followingRoutes);
app.use(apiBaseUrl, invCenterRoutes);
app.use(apiBaseUrl, unidadRoutes);
app.use(apiBaseUrl, firma);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.sendStatus(err.status);
});

module.exports = app;
