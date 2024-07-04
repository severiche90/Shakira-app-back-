import Mysql from '../db/connections/mysql.js';

export default class CompraDaoMysql extends Mysql {

    constructor() {
        super();
        this.table = 'compras';
    }

    async getAllCompras() {
        const query = `SELECT * FROM ${this.table}`;
        const [result] = await this.connection.promise().query(query);
        return result;
    }

    async getCompraById(id) {
        const query = `SELECT * FROM ${this.table} WHERE ID = ${id}`;
        const [result] = await this.connection.promise().query(query);
        return result;
    }



    async createCompraWithBoth(dni, codigo_perfume, codigo_recital) {
        const perfumeQuery = `SELECT * FROM PERFUMES WHERE codigo_perfume = ?`;
        const [perfume] = await this.connection.promise().query(perfumeQuery, [codigo_perfume]);
        
        if (!perfume.length) {
            throw new Error('Perfume no encontrado.');
        }

        const recitalQuery = `SELECT * FROM RECITALES WHERE codigo_recital = ?`;
        const [recital] = await this.connection.promise().query(recitalQuery, [codigo_recital]);

        if (!recital.length) {
            throw new Error('Recital no encontrado.');
        }

        const userQuery = `SELECT * FROM USUARIO WHERE dni = ?`;
        const [usuario] = await this.connection.promise().query(userQuery, [dni]);

        if (!usuario.length) {
            throw new Error('Usuario no encontrado.');
        }

        const fecha_de_compra = new Date().toISOString().slice(0, 10);
        const precio_perfume = perfume[0].precio_perfume;
        const precio_entrada_recital = recital[0].precio_entrada;
        const monto_total = precio_perfume + precio_entrada_recital;

        const compraQuery = `INSERT INTO ${this.table} (fecha_de_compra, dni_cliente, codigo_perfume, codigo_recital, precio_perfume, precio_entrada_recital, monto_total) VALUES (?, ?, ?, ?, ?, ?, ?)`;
        const [result] = await this.connection.promise().query(compraQuery, [fecha_de_compra, dni, codigo_perfume, codigo_recital, precio_perfume, precio_entrada_recital, monto_total]);

        return {
            numero_de_compra: result.insertId,
            fecha_de_compra,
            dni_cliente: dni,
            codigo_perfume,
            codigo_recital,
            precio_perfume,
            precio_entrada_recital,
            monto_total
        };
    
    }

    async createCompraWithPerfume(dni, codigo_perfume) {
        const perfumeQuery = `SELECT * FROM PERFUMES WHERE codigo_perfume = ?`;
        const [perfume] = await this.connection.promise().query(perfumeQuery, [codigo_perfume]);
        
        if (!perfume.length) {
            throw new Error('Perfume no encontrado.');
        }

        const userQuery = `SELECT * FROM USUARIO WHERE dni = ?`;
        const [usuario] = await this.connection.promise().query(userQuery, [dni]);

        if (!usuario.length) {
            throw new Error('Usuario no encontrado.');
        }

        const fecha_de_compra = new Date().toISOString().slice(0, 10);
        const precio_perfume = perfume[0].precio_perfume;
        const monto_total = precio_perfume;

        const compraQuery = `INSERT INTO COMPRAS (fecha_de_compra, dni_cliente, codigo_perfume, precio_perfume, monto_total) VALUES (?, ?, ?, ?, ?)`;
        const [result] = await this.connection.promise().query(compraQuery, [fecha_de_compra, dni, codigo_perfume, precio_perfume, monto_total]);
        

        return {
            numero_de_compra: result.insertId,
            fecha_de_compra,
            dni_cliente: dni,
            codigo_perfume,
            precio_perfume,
            monto_total
        };
    }

    async createCompraWithRecital(dni, codigo_recital) {
        const recitalQuery = `SELECT * FROM RECITALES WHERE codigo_recital = ?`;
        const [recital] = await this.connection.promise().query(recitalQuery, [codigo_recital]);

        if (!recital.length) {
            throw new Error('Recital no encontrado.');
        }

        const userQuery = `SELECT * FROM USUARIO WHERE dni = ?`;
        const [usuario] = await this.connection.promise().query(userQuery, [dni]);

        if (!usuario.length) {
            throw new Error('Usuario no encontrado.');
        }

        const fecha_de_compra = new Date().toISOString().slice(0, 10);
        const precio_entrada_recital = recital[0].precio_entrada;
        const monto_total = precio_entrada_recital;

        const compraQuery = `INSERT INTO COMPRAS (fecha_de_compra, dni_cliente, codigo_recital, precio_entrada_recital, monto_total) VALUES (?, ?, ?, ?, ?)`;
        const [result] = await this.connection.promise().query(compraQuery, [fecha_de_compra, dni, codigo_recital, precio_entrada_recital, monto_total]);

        return {
            numero_de_compra: result.insertId,
            fecha_de_compra,
            dni_cliente: dni,
            codigo_recital,
            precio_entrada_recital,
            monto_total
        };
    }
    
    async createCompra(numero_de_compra ,fecha_de_compra, dni, codigo_perfume ,codigo_recital, precio_perfume,  precio_entrada_recital, monto_total) {
        const query = `INSERT INTO ${this.table} (numero_de_compra, fecha_de_compra, dni_cliente, codigo_perfume,codigo_recital, precio_perfume, precio_entrada_recital, monto_total) VALUES (?, ?, ?, ?, ?, ?, ?)`;
        const [result] = await this.connection.promise().query(query, [numero_de_compra, fecha_de_compra, dni, codigo_perfume, codigo_recital, precio_perfume, precio_entrada_recital, monto_total]);
        return result.insertId;
    }

}


