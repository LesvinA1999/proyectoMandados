const sequelize = require('sequelize');
const db = require('../configuraciones/db');
const Empleado = db.define(
    "empleado", {
        IdEmpleado: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        NombreEmpleado: {
            type: sequelize.STRING(150),
            allowNull: false,
        },
        ApellidoEmpleado: {
            type: sequelize.STRING(150),
            allowNull: false,
        },
        TelefonoEmpleado: {
            type: sequelize.INTEGER,
            allowNull: false,
        },
        CorreoEmpleado: {
            type: sequelize.STRING(150),
            allowNull: true,
        },
        Idusuario: {
            type: sequelize.INTEGER,
            allowNull: false
        }
    }, {
        tableName: "empleado",
        timestamps: false,
    }
);
module.exports = Empleado;