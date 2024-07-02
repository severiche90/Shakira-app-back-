import routes from '../routes/routes.js';
import UsersControllers from '../controllers/user.controllers.js'

export default class UsersRoutes extends routes {

    constructor() {
        super();
        this.controller = new UsersControllers();
        this.getRoutes();
    }

    getRoutes() {
        this.router
            .get('/', this.controller.getAllUsers)
            .get('/dni/:dni', this.controller.getUserByDni)
            .get('/:id', this.controller.getUserById)
            .post('/', this.controller.createUser)
            .put('/', this.controller.updateUser)
            .delete('/:id', this.controller.deleteUser)
    }

}

