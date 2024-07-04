export default class Compra {

    constructor(id, numero_de_compra, fecha_de_compra, dni_cliente, codigo_perfume, codigo_recital, precio_perfume, precio_entrada_recital, monto_total){
        this.id = id;
        this.numero_de_compra = numero_de_compra;
        this.fecha_de_compra = fecha_de_compra;
        this.dni_cliente = dni_cliente;
        this.codigo_perfume = codigo_perfume;
        this.codigo_recital = codigo_recital;
        this.precio_perfume = precio_perfume;
        this.precio_entrada_recital = precio_entrada_recital;
        this.monto_total = monto_total;
    }
}