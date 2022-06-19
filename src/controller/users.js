"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.putUser = exports.postUser = exports.getUserById = exports.getUsers = void 0;
const mysql_1 = __importDefault(require("../mysql/mysql"));
const estados = ['Nuevo', 'No interesado', 'Número equivodado', 'Información Equivocada', 'Alto potencial', 'Bajo potencial'];
const getUsers = (req, res) => {
    try {
        const query = `SELECT * FROM users`;
        mysql_1.default.ejecutarQuery(query, (err, users) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            return res.json({
                ok: true,
                message: 'Listado Usuarios',
                users
            });
        });
    }
    catch (error) {
        return res.status(400).json({
            ok: false,
            msg: 'Error al cargar usuarios',
        });
    }
};
exports.getUsers = getUsers;
const getUserById = (req, res) => {
    try {
        const id = req.params.id;
        const scapeId = mysql_1.default.instance.cnn.escape(id);
        const query = `SELECT * FROM users WHERE id = ${scapeId}`;
        mysql_1.default.ejecutarQuery(query, (err, user) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            return res.json({
                ok: true,
                message: 'Usuario encontrado',
                user
            });
        });
    }
    catch (error) {
        return res.status(400).json({
            ok: false,
            err: error
        });
    }
};
exports.getUserById = getUserById;
const postUser = (req, res) => {
    try {
        const { body } = req;
        if (estados.indexOf(body.estado) === -1) {
            return res.status(400).json({
                ok: false,
                message: 'El estado no es válido'
            });
        }
        const query = `INSERT INTO users (nombre, apellido, telefono, correo, edad, estado, fecha_insercion) VALUES ('${body.nombre}', '${body.apellido}', '${body.telefono}', '${body.correo}', '${body.edad}', '${body.estado}', NOW())`;
        mysql_1.default.ejecutarQuery(query, (err, user) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            return res.json({
                ok: true,
                message: 'Usuario creado',
                user
            });
        });
    }
    catch (error) {
        return res.status(400).json({
            ok: false,
            err: error
        });
    }
};
exports.postUser = postUser;
const putUser = (req, res) => {
    try {
        const id = req.params.id;
        const scapeId = mysql_1.default.instance.cnn.escape(id);
        const { body } = req;
        const query = `UPDATE users SET nombre = '${body.nombre}', apellido = '${body.apellido}', telefono = '${body.telefono}', correo = '${body.correo}', edad = '${body.edad}', estado = '${body.estado}' WHERE id = ${scapeId}`;
        if (estados.indexOf(body.estado) === -1) {
            return res.status(400).json({
                ok: false,
                message: 'El estado no es válido'
            });
        }
        mysql_1.default.ejecutarQuery(query, (err, user) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            return res.json({
                ok: true,
                message: 'Usuario actualizado',
                user
            });
        });
    }
    catch (error) {
        return res.status(400).json({
            ok: false,
            err: error
        });
    }
};
exports.putUser = putUser;
const deleteUser = (req, res) => {
    const id = req.params.id;
    const scapeId = mysql_1.default.instance.cnn.escape(id);
    const query = `DELETE FROM users WHERE id = ${scapeId}`;
    mysql_1.default.ejecutarQuery(query, (err, user) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.json({
            ok: true,
            message: 'Usuario Eliminado',
        });
    });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.js.map