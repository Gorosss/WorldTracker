import CitiesModel from "../models/citiesModel";


class citiesController {


    static async getCities() {
        const citiesModel = new CitiesModel();

        return await citiesModel.getCities();
    }
    
    static async getCity(id) {
        const citiesModel = new CitiesModel();

        return await citiesModel.getCity(id);
    }

    static async createCity(city) {
        const citiesModel = new CitiesModel();

        return await citiesModel.createCity(city);
    }

    static async deleteCity(id) {
        const citiesModel = new CitiesModel();

        return await citiesModel.deleteCity(id);
    }
}

export default citiesController;

