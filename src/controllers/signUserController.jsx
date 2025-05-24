import SignUserModel from "../models/signUserModel";


class SignUserController {
    constructor() {
        this.signUserModel = new SignUserModel();
    }

    async signUp(name, email, password) {
        return await this.signUserModel.signUp(name, email, password);
    }

    async signIn(email, password) {
        return await this.signUserModel.signIn(email, password);
    }
}

export default SignUserController;
