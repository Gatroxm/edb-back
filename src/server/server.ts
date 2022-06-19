import express, { Application } from 'express';
import cors from 'cors';
import path = require('path');
import userRoutes from '../route/user';
export default class Server {

    public app: Application;
    public port: string;
    private apiPaths = {
        users: '/api/users',
    };

    constructor() {
        this.port = process.env.PORT || '8000';
        this.app = express();
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

}