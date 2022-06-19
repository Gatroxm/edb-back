"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
class MySql {
    constructor() {
        this.conectado = false;
        this.cnn = mysql_1.default.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'edb_prueba_db'
        });
        this.conectarDB();
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    static ejecutarQuery(query, callback) {
        this.instance.cnn.query(query, (err, results, fields) => {
            if (err) {
                console.log('error en query, ', err);
                return callback(err);
            }
            if (results.length === 0) {
                callback('El registro solicitado no existe');
            }
            else {
                callback(null, results);
            }
        });
    }
    conectarDB() {
        this.cnn.connect((err) => {
            if (err) {
                console.log(err);
                return;
            }
            this.conectado = true;
            console.log('Base de datos On Line');
        });
    }
}
exports.default = MySql;
//# sourceMappingURL=mysql.js.map