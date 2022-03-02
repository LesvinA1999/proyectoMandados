const sequelize = require('sequelize');
const db = new sequelize(
    'mandaditos', //Nombre de la base de datos
    'root', //usuario de la base de datos
    'hola1901', //contrasenia del usuario
    {
        host: 'localhost', //servidor 
        dialect: 'mysql', //lenguaje 
        port: '3306', //puerto mysql
    }
) ;
module.exports=db;