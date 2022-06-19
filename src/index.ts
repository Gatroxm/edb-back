import dotenv from 'dotenv';
import Server from './server/server';
import MySql from './mysql/mysql';
dotenv.config()

const server = Server.init();

MySql.instance;

server.srtart( () => {
    console.log('Servidor corriendo en el puerto: ', server.port);
});