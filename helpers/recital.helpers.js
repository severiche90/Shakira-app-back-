import Recital from '../models/recital.js'

export default class RecitalHelpers {

        parseRecital(data) {
            const{id, codigo_recital, precio_entrada, pais, fecha_recital, stock} = data
            const user = new Recital(parseInt(id), codigo_recital, parseFloat(precio_entrada), pais, new Date(fecha_recital), parseInt(stock));
            return user;
        }



}