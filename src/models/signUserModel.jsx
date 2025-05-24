
import { supabase } from "./supabaseClient";


class SignUserModel {
    constructor() {
        this.supabase = supabase;
    }

    async signUp(name, email, password) {
        try {
            const { data, error } = await this.supabase.from('users').insert([
                { name, email, password } // Hashing the password before storing
            ]).select().single();

            if (error) {
                throw error;
            } else {
                return data;
            }
        } catch (error) {
            console.error('Error during sign up:', error);
            throw error;
        }
    }

    async signIn(email, password) {
        try {
            const { data, error } = await this.supabase.from('users').select('*').eq('email', email).eq('password', password).single();

            if (error) {
                throw error;
            } else {
                return data;
            }
        } catch (error) {
            console.error('Error during sign in:', error);
            throw error;
        }
    }


}

export default SignUserModel;