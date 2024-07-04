import express, { urlencoded } from 'express';
import UsersRoutes from '../routes/user.routes.js';
import CompraRoutes from '../routes/compra.routes.js';

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
        const compras = new CompraRoutes();
        Server.app.use('/usuarios', users.router);
        Server.app.use('/compras', compras.router);
    }

    static run (port) {
        Server.middlewares();
        Server.routes();
        Server.runServer(port);
    }




}


