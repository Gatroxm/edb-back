import express, { Application } from 'express';
import cors from 'cors';
import path = require('path');
import userRoutes from '../route/user';
import db from '../mysql/mysql';
export default class Server {

    public app: Application;
    public port: string;
    private apiPaths = {
        users: '/api/users',
    };

    constructor() {
        this.port = process.env.PORT || '8000';
        this.app = express();
        this.dbConnection();
        this.midelwares();
        this.routes();
    }

    static init () {
        return new Server(  );
    }

    private publicFolder () {
        const publicPath = path.resolve(__dirname, '../public');
        this.app.use(express.static(publicPath));
    }

    routes() {
        this.app.use(this.apiPaths.users, userRoutes);
    }

    midelwares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    srtart( callbck: any ) {
        this.app.listen(this.port, callbck);
        this.publicFolder();
    }

   async dbConnection() {
    try {
        await db.authenticate();
        console.log('DB is connected');
    } catch (error) {
        console.log(error);
    }
   }

}