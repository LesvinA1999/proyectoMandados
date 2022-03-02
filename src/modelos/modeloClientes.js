const sequelize = require('sequelize');
const db = require('../configuraciones/db');
const Cliente = db.define(
    "clientes",
    {
        Id:{
            type:sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        Nombre:{
            type: sequelize.STRING(45),
            allowNull: false,
        },
        Apellido:{
            type: sequelize.STRING(45),
            allowNull: false,
        },
        Telefono:{
            type: sequelize.STRING(45),
            allowNull: false,
        }
    },
    {
        tableName: "clientes",
        timestamps: false,
    }
);
module.exports=Cliente;