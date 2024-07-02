import routes from '../routes/routes.js';
import RecitalControllers from '../controllers/recital.controllers.js';

export default class RecitalRoutes extends routes {

        constructor() {
            super();
            this.controller = new RecitalControllers();
            this.getRoutes();
        }

        getRoutes() {
            this.router
                .get('/', this.controller.getAllRecitales)
                // .get('/dni/:dni', this.controller.getUserByDni)
                // .get('/:id', this.controller.getUserById)
                // .post('/', this.controller.createUser)
                // .put('/', this.controller.updateUser)
                // .delete('/:id', this.controller.deleteUser)
        }




}
