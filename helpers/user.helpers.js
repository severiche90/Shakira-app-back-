import User from '../models/user.js';

export default class UserHelpers {

    parseUser(data) {
        const {dni, nombre, apellido, correo_electronico} = data;
        const user = new User(parseInt(dni), nombre, apellido, correo_electronico);
        return user;
    }
}



