import { createClient } from '@supabase/supabase-js';

const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;


class CitiesModel {
    

    constructor() {
        
        this.supabase = createClient(SUPABASE_URL,
        SUPABASE_KEY);
    }

    async getCities() {
    
        try {
            const res = await this.supabase.from('cities').select('*');

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

    async createCity(city) {
        try {
            const res = await this.supabase.from('cities').insert([city]).select();


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