const sequelize = require("sequelize");
const db = require("../configuraciones/db");
const bycrypt = require("bcrypt");
const Persona = db.define(
    "usuario", //modelo
    {
        IdUsuario: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
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
        IdTipoUsuario: {
            type: sequelize.INTEGER,
            allowNull: false,
        }
    },

    {
        tableName: "usuarios",
        timestamps: false,
        hooks: {
            beforeCreate(usuario) {
                const hast = bycrypt.hashSync(usuario.Contrasena, 10); //contrase;a encriptada
                usuario.Contrasena = hast;
            },
            beforeUpdate(usuario) {
                const hast = bycrypt.hashSync(usuario.Contrasena, 10); //contrase;a encriptada
                usuario.Contrasena = hast;
            },
        }, //eventos cuando hay una accion
    }
);
Persona.prototype.VerificarContrasena = (con, com) => {
    return bycrypt.compareSync(con, com);
}; //com contrase;a del modelo, lo que esta guardadoen la db devuelve 1 o 0
module.exports = Persona;