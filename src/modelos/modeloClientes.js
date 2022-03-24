const sequelize = require('sequelize');
const db = require('../configuraciones/db');
const bcrypt = require('bcrypt');
const Cliente = db.define(
    "cliente", {
        IdCliente: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        NombreCliente: {
            type: sequelize.STRING(150),
            allowNull: false,
        },
        ApellidoCliente: {
            type: sequelize.STRING(150),
            allowNull: false,
        },
        TelefonoCliente: {
            type: sequelize.STRING(8),
            allowNull: true,
        },
        Direccion: {
            type: sequelize.STRING(200),
            allowNull: false,
        },
        Usuario: {
            type: sequelize.STRING(100),
            allowNull: false,
        },
        Contrasena: {
            type: sequelize.STRING(200),
            allowNull: false,
        },
        TipoUsuario: {
            type: sequelize.STRING(200),
            allowNull: true,
        },
        EstadoUsuario: {
            type: sequelize.ENUM('AC', 'IN', 'BL'),
            allowNull: true,
            defaultValue: 'AC',
        },
    }, 
    {
        tableName: "clientes",
        timestamps: false,
        hooks:{
            beforeCreate(cliente){
                const hast = bcrypt.hashSync(cliente.Contrasena, 10);
                cliente.Contrasena = hast;
            },
            beforeUpdate(cliente){
                const hast = bcrypt.hashSync(cliente.Contrasena, 10);
                cliente.Contrasena = hast;
            }
        }
    }
);
Cliente.prototype.VerificarContra = (con, com) =>{
    return bcrypt.compareSync(con, com);
}
module.exports = Cliente;