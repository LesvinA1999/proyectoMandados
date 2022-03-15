const passport = require('passport');
const ModeloUsuario = require('../modelos/modeloUsuarios');
const estrategiaJWT = require('passport-jwt').Strategy;
const extraerJWT = require('passport-jwt').ExtractJwt;
const JWT = require('jsonwebtoken');
const moment = require('moment');
const duracion = moment.duration(50, "m").asSeconds();
const clave = 'MiContrasenaSegura';

exports.generarToken = (data) => {
    return JWT.sign(data, clave, { expiresIn: duracion });
};

const opciones = {};
opciones.jwtFromRequest = extraerJWT.fromAuthHeaderAsBearerToken();
opciones.secretOrKey = clave;

passport.use(new estrategiaJWT(opciones, async(payload, done) => {
    return await ModeloUsuario.findOne({
            Idusuario: payload.Idusuario
        })
        .then((data) => {
            return done(null, data.Idusuario);
        })
        .catch((error) => {
            return done(null, false);
        });
}));

exports.ValidarAutenticado = passport.authenticate('jwt', { session: false, failureRedirect: '/API/autenticacion/error/' });