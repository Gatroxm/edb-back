"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteHeroe = exports.putHeroe = exports.postHeroe = exports.getHeroById = exports.getHeros = void 0;
const mysql_1 = __importDefault(require("../mysql/mysql"));
const getHeros = (req, res) => {
    const query = `SELECT * FROM heroes`;
    mysql_1.default.ejecutarQuery(query, (err, heroes) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: err
            });
        }
        else {
            res.json({
                ok: true,
                message: 'Heroes',
                heroes
            });
        }
    });
};
exports.getHeros = getHeros;
const getHeroById = (req, res) => {
    const id = req.params.id;
    const scapeId = mysql_1.default.instance.cnn.escape(id);
    const query = `SELECT * FROM heroes where id = ${scapeId}`;
    mysql_1.default.ejecutarQuery(query, (err, heroe) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: err
            });
        }
        else {
            res.json({
                ok: true,
                heroe
            });
        }
    });
};
exports.getHeroById = getHeroById;
const postHeroe = (req, res) => {
    const { body } = req;
    const query = `INSERT INTO heroes (nombre, poder, description) VALUES ('${body.nombre}', '${body.poder}', '${body.description}')`;
    mysql_1.default.ejecutarQuery(query, (err, heroe) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: err
            });
        }
        else {
            res.status(200).json({
                ok: true,
                heroe
            });
        }
    });
};
exports.postHeroe = postHeroe;
const putHeroe = (req, res) => {
    const id = req.params.id;
    const scapeId = mysql_1.default.instance.cnn.escape(id);
    const { body } = req;
    const query = `UPDATE heroes SET nombre = '${body.nombre}', poder = '${body.poder}', description = '${body.description}' WHERE id = ${scapeId}`;
    mysql_1.default.ejecutarQuery(query, (err, heroe) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: err
            });
        }
        else {
            res.status(200).json({
                ok: true
            });
        }
    });
};
exports.putHeroe = putHeroe;
const deleteHeroe = (req, res) => {
    const id = req.params.id;
    const scapeId = mysql_1.default.instance.cnn.escape(id);
    const query = `DELETE FROM heroes WHERE id = ${scapeId}`;
    mysql_1.default.ejecutarQuery(query, (err, heroe) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: err
            });
        }
        else {
            res.status(200).json({
                ok: true,
                heroe
            });
        }
    });
};
exports.deleteHeroe = deleteHeroe;
//# sourceMappingURL=user.js.map