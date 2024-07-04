import Compra from '../models/compra.js';

export default class CompraHelpers {

    parseCompra(data) {
        const {id, numero_de_compra, fecha_de_compra, dni_cliente, codigo_perfume, codigo_recital, precio_perfume, precio_entrada_recital, monto_total} = data;
        const compra = new Compra (parseInt(id), parseInt(numero_de_compra), new Date(fecha_de_compra), parseInt(dni_cliente), codigo_perfume, codigo_recital, parseFloat(precio_perfume), parseFloat(precio_entrada_recital), parseFloat(monto_total));
        return compra;
    }
}



