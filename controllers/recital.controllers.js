import RecitalDaoMysql from '../dao/recital.dao.mysql.js'
import RecitalHelpers from './../helpers/recital.helpers.js';

export default class RecitalControllers {

    constructor() {
        this.recitaldb = new RecitalDaoMysql();
        this.helpers = new RecitalHelpers();
    }

    getAllRecitales = async (req,res) => {
        const recitales = await this.recitaldb.getAllRecitales();
        res.status(200).json(recitales);
    }

    getRecitalesById = async (req,res) => {
        const id = req.params.id;
        const recital = await this.recitaldb.getRecitalesById(id);
        res.status(200).json(recital);

    }



}




