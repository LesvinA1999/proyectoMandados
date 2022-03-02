const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.set('json spaces', 2);

app.use('/api/clientes', require('./rutas/rutasClientes'));
app.listen(7000, () => {
    console.log("Servidor iniciado en el puerto 7000");
});