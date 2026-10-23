//Appwrite Authentication Service. This can be used to other project also as it is if beckend service is used by app write.

import conf from "../config/config";
import { Client, Account, ID } from "appwrite";

//OOP concept
export class AuthService {
    client = new Client();  // Appwrite se baat karne ke liye Client
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)      //Endpoint set kiya
            .setProject(conf.appwriteProjectID) //ProjectID set kiya

        this.account = new Account(this.client); //Account features (login/signup) ko activate kiya
    }

    //user account creation
    async createAccount({ email, password, name }) {
        try {
            // Appwrite ka original code call kiya
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                // Account banne par dobara login page par bhejne ki bajaye, directly yahi se login method call karein.
                return this.login({email, password})
            } else {
                return userAccount;     // Agar account null hai toh as it 7is return kar do
            }

        } catch (error) {
            console.log("Appwrite service creatAccount: ", error);
            throw error;
        }
    }

    //login account
    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession({ email, password });
        } catch (error) {
            console.log("Appwrite service, login: ",error);
            throw error;
        }
    }

    //
    async getCurrentUser(){
        try {
            return this.account.get();
        } catch (error) {
            console.log("Appwrite service, current user: ", error);
            throw error;
        }
        return null;
    }

    async logOut(){
        try {
            await this.account.deleteSessions(); 
        } catch (error) {
            console.log("Appwrite servie, logout: ",error);
            throw error;
        }
    }

}

const authService = new AuthService();

export default authService