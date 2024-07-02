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
                .get('/stock', this.controller.getRecitalesByStock)
                .get('/:id', this.controller.getRecitalesById)
                // .post('/', this.controller.createUser)
                // .put('/', this.controller.updateUser)
                // .delete('/:id', this.controller.deleteUser)
        }




}
