import Mysql from '../db/connections/mysql.js';

export default class UsersDaoMysql extends Mysql {

    constructor() {
    super();
    this.table = 'usuario';
    }

    async getAllUsers() {
        const query = `SELECT * FROM ${this.table}`;
        const [result] = await this.connection.promise().query(query);
        return result;
    }

    async getUserById(id) {
        const query = `SELECT * FROM ${this.table} WHERE ID = ${id}`;
        const [result] = await this.connection.promise().query(query);
        return result;
    }

    async getUserByDni(dni) {
        const query = `SELECT * FROM ${this.table} WHERE DNI = ${dni}`;
        const [result] = await this.connection.promise().query(query);
        return result;
    }

    async createUser(user) {
        const query = `INSERT INTO ${this.table} (dni, nombre, apellido, correo_electronico) VALUES (?, ?, ?, ?)`;
        const [result] = await this.connection.promise().query(query,[user.dni, user.nombre, user.apellido, user.correo_electronico]);
        return result;
    }
    
    async updateUser (user) {
        const query = `UPDATE ${this.table} SET nombre = ?, apellido = ?, correo_electronico = ? WHERE id = ?`;
        const [result] = await this.connection.promise().query(query,[user.nombre, user.apellido, user.correo_electronico, user.id]);
        return result;
    }

    async deleteUser (id) {
        const query = `DELETE FROM ${this.table} WHERE id = ${id}`;
        const [result] = await this.connection.promise().query(query);
        return result;
    }


}


