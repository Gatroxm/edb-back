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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path = require("path");
const user_1 = __importDefault(require("../route/user"));
const mysql_1 = __importDefault(require("../mysql/mysql"));
class Server {
    constructor() {
        this.apiPaths = {
            users: '/api/users',
        };
        this.port = process.env.PORT || '8000';
        this.app = (0, express_1.default)();
        this.dbConnection();
        this.midelwares();
        this.routes();
    }
    static init() {
        return new Server();
    }
    publicFolder() {
        const publicPath = path.resolve(__dirname, '../public');
        this.app.use(express_1.default.static(publicPath));
    }
    routes() {
        this.app.use(this.apiPaths.users, user_1.default);
    }
    midelwares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    srtart(callbck) {
        this.app.listen(this.port, callbck);
        this.publicFolder();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield mysql_1.default.authenticate();
                console.log('DB is connected');
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map