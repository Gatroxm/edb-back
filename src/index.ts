import dotenv from 'dotenv';
import Server from './server/server';
dotenv.config()

const server = Server.init();

server.srtart( () => {
    console.log('Servidor corriendo en el puerto: ', server.port);
});