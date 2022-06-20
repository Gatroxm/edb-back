import { DataTypes } from "sequelize";
import db from '../mysql/mysql';
const User = db.define('User', {
    'nombre': {
        type: DataTypes.STRING,
    },
    'apellido': {
        type: DataTypes.STRING,
    },
    'telefono': {
        type: DataTypes.STRING,
    },
    'correo': {
        type: DataTypes.STRING,
    },
    'edad': {
        type: DataTypes.INTEGER,
    },
    'estado': {
        type: DataTypes.STRING,
    }
});
export default User;