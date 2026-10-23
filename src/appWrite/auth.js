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

    async createAccount({ email, password, name }) {
        try {
            // Appwrite ka original code call kiya
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                // Account banne par dobara login page par bhejne ki bajaye, directly yahi se login method call karein.
                //login method call
            } else {
                return userAccount;     // Agar account null hai toh as it 7is return kar do
            }

        } catch (error) {
            console.log("Appwrite service creatAccount: ", error);
            throw error;
        }
    }

    
}

const authService = new AuthService();

export default authService