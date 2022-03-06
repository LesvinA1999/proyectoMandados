const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('json spaces', 2);

app.use("/api/clientes", require("./rutas/rutasClientes"));
app.use("/api/comercios", require("./rutas/rutasComercio"));
app.use("/api/tipocomercios", require("./rutas/rutasTipoComercio"));
app.use("/api/tipousuarios", require("./rutas/rutasTipoUsuarios"));
app.use("/api/usuarios", require("./rutas/rutasUsuarios"));
app.listen(7000, () => {
    console.log("Servidor iniciado en el puerto 7000");
});