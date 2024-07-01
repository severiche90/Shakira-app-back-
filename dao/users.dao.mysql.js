import Mysql from '../db/connections/mysql.js';

export default class UsersDaoMysql extends Mysql {

    constructor() {
    super();
    this.table = 'usuario';
    }

    async getAllUsers() {
        const query = `SELECT * FROM ${this.table}`;
        const [result] = await this.connection.promise().query(query);
        console.log(result);
        return result;
    }



}


