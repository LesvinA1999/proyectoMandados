const sequelize = require('sequelize');
const db = require('../configuraciones/db');
const TipoU = db.define(
    "tipousuario", {
        IdTipoUsuario: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        DescripcionTipo: {
            type: sequelize.STRING(250),
            allowNull: false,
        }
    }, {
        tableName: "tipousuario",
        timestamps: false,
    }
);
module.exports = TipoU;