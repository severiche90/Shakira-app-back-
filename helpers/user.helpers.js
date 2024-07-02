import User from '../models/user.js';

export default class UserHelpers {

    parseUser(data) {
        const {id, dni, nombre, apellido, correo_electronico} = data;
        const user = new User(parseInt(id), parseInt(dni), nombre, apellido, correo_electronico);
        return user;
    }
    // [user.dni, user.nombre, user.apellido, user.correo_electronico];
}



