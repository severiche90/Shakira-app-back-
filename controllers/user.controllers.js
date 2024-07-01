import UsersDaoMysql from '../dao/users.dao.mysql.js';
import User from '../models/user.js';
import UserHelpers from './../helpers/user.helpers.js';

export default class UsersControllers {

    constructor() {
        this.usersdb = new UsersDaoMysql();
        this.helpers = new UserHelpers();
    }

    getAllUsers = async (req,res) => {
        const users = await this.usersdb.getAllUsers();
        res.status(200).json(users);
    }

}


