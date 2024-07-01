import express, { urlencoded } from 'express';
import UsersRoutes from '../routes/user.routes.js';

export default class Server {

    static app = express();

    static middlewares() {
        Server.app.use(express.json());
        Server.app.use(urlencoded({extended: true}));
    }

    static runServer(port) {
        Server.app.listen(port, () => 
            console.log(`Server corriendo en el puerto ${port}`));
    }

    static routes() {
        const users = new UsersRoutes();
        Server.app.use('/usuarios', users.router);
    }

    static run (port) {
        Server.runServer(port);
        Server.routes();
        Server.middlewares();
    }




}


