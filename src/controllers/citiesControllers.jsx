import CitiesModel from "../models/citiesModel";


class CitiesController {
 
    
    constructor() {
        this.citiesModel = new CitiesModel();
    }

    async getCities(userId) {

        return await this.citiesModel.getCities(userId);
    }

    async getCity(id) {

        return await this.citiesModel.getCity(id);
    }

    async createCity(city, userId) {
        return await this.citiesModel.createCity(city, userId);
    }

    async deleteCity(id) {

        return await this.citiesModel.deleteCity(id);
    }
}

export default CitiesController;

