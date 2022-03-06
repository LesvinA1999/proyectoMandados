const sequelize = require('sequelize');
const db = require('../configuraciones/db');
const TipoComercio = db.define(
    "tipocomercio", {
        IdTipoComercio: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        DescripcionComercio: {
            type: sequelize.STRING(250),
            allowNull: false,
        },
    }, {
        tableName: "tipocomercio",
        timestamps: false,
    }
);
module.exports = TipoComercio;