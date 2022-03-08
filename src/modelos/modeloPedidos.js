const sequelize = require('sequelize');
const db = require('../configuraciones/db');
const Pedido = db.define(
    "pedido", {
        IdPedido: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        IdCliente: {
            type: sequelize.INTEGER,
            allowNull: false,
        },
        precioEnvio: {
            type: sequelize.SMALLINT,
            allowNull: false,
        },
        IdEmpleado: {
            type: sequelize.INTEGER,
            allowNull: false,
        },
        IdDetallePedido: {
            type: sequelize.INTEGER,
            allowNull: false,
        },
        FechaPedido: {
            type: sequelize.DATE,
            allowNull: false,
        },
        EstadoPedido: {
            type: sequelize.TINYINT,
            allowNull: false,
        }

    }, {
        tableName: "pedidos",
        timestamps: false,
    }
);
module.exports = Pedido;