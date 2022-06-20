"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.putUser = exports.postUser = exports.getUserById = exports.getUsers = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const estados = ['Nuevo', 'No interesado', 'Número equivodado', 'Información Equivocada', 'Alto potencial', 'Bajo potencial'];
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield usuario_1.default.findAll();
        return res.status(200).json({
            ok: true,
            users
        });
    }
    catch (error) {
        return res.status(400).json({
            ok: false,
            msg: 'Error al cargar usuarios',
        });
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield usuario_1.default.findByPk(id);
        if (user) {
            return res.status(200).json({
                ok: true,
                user
            });
        }
        else {
            return res.status(400).json({
                ok: false,
                msg: 'No existe el usuario',
            });
        }
    }
    catch (error) {
        return res.status(400).json({
            ok: false,
            err: error
        });
    }
});
exports.getUserById = getUserById;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        if (estados.indexOf(body.estado) === -1) {
            return res.status(400).json({
                ok: false,
                message: 'El estado no es válido'
            });
        }
        const user = yield usuario_1.default.create(body);
        return res.status(200).json({
            ok: true,
            user
        });
    }
    catch (error) {
        return res.status(400).json({
            ok: false,
            err: error
        });
    }
});
exports.postUser = postUser;
const putUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield usuario_1.default.findByPk(id);
        if (!user) {
            return res.status(400).json({
                ok: false,
                message: 'El usuario no existe'
            });
        }
        const { body } = req;
        if (estados.indexOf(body.estado) === -1) {
            return res.status(400).json({
                ok: false,
                message: 'El estado no es válido'
            });
        }
        const userUpdate = yield usuario_1.default.update(body, {
            where: {
                id
            }
        });
        return res.status(200).json({
            ok: true,
            message: 'Usuario actualizado'
        });
    }
    catch (error) {
        return res.status(400).json({
            ok: false,
            err: error
        });
    }
});
exports.putUser = putUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const user = yield usuario_1.default.findByPk(id);
    if (!user) {
        return res.status(400).json({
            ok: false,
            message: 'El usuario no existe'
        });
    }
    yield user.destroy();
    return res.status(200).json({
        ok: true,
        message: 'Usuario eliminado'
    });
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.js.map