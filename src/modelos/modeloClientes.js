const sequelize = require('sequelize');
const db = require('../configuraciones/db');
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
            allowNull: false,
        },
        Direccion: {
            type: sequelize.INTEGER,
            allowNull: false,
        },
        Idusuario: {
            type: sequelize.INTEGER,
            allowNull: false
        }
    }, {
        tableName: "clientes",
        timestamps: false,
    }
);
module.exports = Cliente;