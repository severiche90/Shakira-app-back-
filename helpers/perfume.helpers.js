import Perfume from "../models/perfume.js";

export default class PerfumeHelpers {

    parsePerfume(data) {
        const {id, codigo_perfume, nombre_perfume, precio_perfume, stock} = data;
        const perfume = new Perfume(parseInt(id), codigo_perfume, nombre_perfume, parseFloat(precio_perfume), parseInt(stock));
        return perfume;
    }
}
