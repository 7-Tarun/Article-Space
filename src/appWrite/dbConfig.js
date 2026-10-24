// Database & Storage Service using App Write

import conf from "../config/config";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

// Client: Connects to Appwrite using the Endpoint and Project ID.
// Databases: Creates, fetches, updates, and deletes database documents.
// Storage(bucket): Uploads, deletes, and previews media files (photos, videos).
// ID.unique(): Generates a unique ID for a document or file.
// Query: Filters database results based on specific conditions (status == "active").

export class DBService{
    client = new Client();
    databases;
    storage;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectID);

        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userID}){
        try {
            return await this.databases.createDocument(
                conf.app
            ) 
            
        } catch (error) {
            console.log("App Write Service: createPost: Error: ",error);
            throw error;
        }
    }

}

const dbService = new DBService();
export default dbService