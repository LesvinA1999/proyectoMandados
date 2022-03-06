const sequelize = require('sequelize');
const db = require('../configuraciones/db');
const Comercio = db.define(
    "comercio", {
        IdComercio: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        NombreComercio: {
            type: sequelize.STRING(45),
            allowNull: false,
        },
        IdTipoComercio: {
            type: sequelize.INTEGER,
            allowNull: false,
        },
    }, {
        tableName: "comercio",
        timestamps: false,
    }
);
module.exports = Comercio;