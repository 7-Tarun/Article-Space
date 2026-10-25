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
            return await this.databases.create(
                conf.appwriteDatabaseID,
                conf.appwriteTableID,
                slug,   // Slug: A URL-friendly version of a title (e.g., "React Redux Tutorial" → "react-redux-tutorial").
                {       //Data jo save karna hai (Object format me)
                    title,
                    content,
                    featuredImage,
                    status,
                    userID,
                }
            )
            
        } catch (error) {
            console.log("App Write Service: createPost: Error: ",error);
            throw error;
        }
    }

    //ID (slug) ko separately pass karte hain kyunki ye identify karta hai ki kaunsa document update karna hai, jabki data object mein sirf wahi fields hoti hain jinhe update karna hai.
    async updatePost(slug,{title, content, featuredImage, status}){
        try {
            return await this.databases.update(
                conf.appwriteDatabaseID,    // 1. Database batao
                conf.appwriteTableID,       // 2. Collection batao
                slug,                       // 3. Document ID batao (yaha apna slug hai)
                {                           // 4. Object bhejo jisme naya data ho
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("App Write Service: updatePost: Error: ", error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.delete(
                conf.appwriteDatabaseID,
                conf.appwriteTableID,
                slug,
            )
            return true;
        } catch (error) {
            console.log("App Write Service: DeletePost: Error: ",error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.get(
                conf.appwriteDatabaseID,
                conf.appwriteTableID,
                slug,
            )
        } catch (error) {
            console.log("App Write Service: GetPost: Error: ",error);
            return false;
        }
    }

}

const dbService = new DBService();
export default dbService