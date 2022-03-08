const sequelize = require('sequelize');
const db = require('../configuraciones/db');
const DetallePedido = db.define(
    "pedido", {
        IdDetallePedido: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        Cantidad: {
            type: sequelize.INTEGER,
            allowNull: false,
        },
        subTotal: {
            type: sequelize.DECIMAL(10),
            allowNull: false,
        },
        IdEstadoPedido: {
            type: sequelize.INTEGER,
            allowNull: false,
        },
        IdComercio: {
            type: sequelize.INTEGER,
            allowNull: false,
        },
        IdFacctura: {
            type: sequelize.INTEGER,
            allowNull: false,
        }

    }, {
        tableName: "detallepedido",
        timestamps: false,
    }
);
module.exports = DetallePedido;