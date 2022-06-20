
import { Sequelize } from 'sequelize'

const db = new Sequelize('edb_prueba_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export default db;
