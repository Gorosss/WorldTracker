import { supabase } from './supabaseClient.js'


class CitiesModel {
    

    constructor() {

        this.supabase = supabase;
    }

    async getCities(userId) {
    
        try {
            const res = await this.supabase.from('cities').select('*').eq('userId', userId);

            if (res.error) {
                throw res.error;
            } else {
                return res.data;
            }
        } catch (error) {
            console.error('Error al obtener ciudades:', error);
            throw error;
        }
    }


    async getCity(id) {
        try {
            const res = await this.supabase.from('cities').select('*').eq('id', id).single();

            if (res.error) {
                throw res.error;
            } else {
                return res.data;
            }
        } catch (error) {
            console.error('Error al obtener la ciudad:', error);
            throw error;
        }
    }

    async createCity(city, userId) {
        try {
            const res = await this.supabase.from('cities').insert([{ ...city, userId }]).select();


            if (res.error) {
                throw res.error;
            } else {
                return res.data[0];
            }
        } catch (error) {
            console.error('Error al crear la ciudad:', error);
            throw error;
        }
    }

    async deleteCity(id) {
        try {
            const res = await this.supabase.from('cities').delete().eq('id', id);

            if (res.error) {
                throw res.error;
            } else {
                return res.data;
            }
        } catch (error) {
            console.error('Error al eliminar la ciudad:', error);
            throw error;
        }
    }


}

export default CitiesModel;