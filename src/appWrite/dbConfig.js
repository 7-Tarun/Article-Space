// Database & Storage Service using App Write

import conf from "../config/config";
import { Client, Account, ID, TablesDB, Storage, Query } from "appwrite";

// Client: Connects to Appwrite using the Endpoint and Project ID.
// Databases: Creates, fetches, updates, and deletes database documents.
// Storage(bucket): Uploads, deletes, and previews media files (photos, videos).
// ID.unique(): Generates a unique ID for a document or file.
// Query: Filters database results based on specific conditions (status == "active").

export class DBService {
    client = new Client();
    tablesDB;
    storage;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectID);

        this.tablesDB = new TablesDB(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userID }) {
        try {
            return await this.tablesDB.createRow({
                databaseId: conf.appwriteDatabaseID,
                tableId: conf.appwriteTableID,
                rowId: slug,
                data: {
                    title,
                    content,
                    featuredImage,
                    status,
                    userID,
                },
            });
        } catch (error) {
            console.log("App Write Service: createPost: Error: ", error);
            throw error;
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.tablesDB.updateRow({
                databaseId: conf.appwriteDatabaseID,
                tableId: conf.appwriteTableID,
                rowId: slug,
                data: {
                    title,
                    content,
                    featuredImage,
                    status,
                },
            });
        } catch (error) {
            console.log("App Write Service: updatePost: Error: ", error);
            throw error;
        }
    }

    async deletePost(slug) {
        try {
            await this.tablesDB.deleteRow({
                databaseId: conf.appwriteDatabaseID,
                tableId: conf.appwriteTableID,
                rowId: slug,
            });
            return true;
        } catch (error) {
            console.log("App Write Service: DeletePost: Error: ", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.tablesDB.getRow({
                databaseId: conf.appwriteDatabaseID,
                tableId: conf.appwriteTableID,
                rowId: slug,
            });
        } catch (error) {
            console.log("App Write Service: GetPost: Error: ", error);
            return false;
        }
    }

    async getAllPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.tablesDB.listRows({
                databaseId: conf.appwriteDatabaseID,
                tableId: conf.appwriteTableID,
                queries,
            });
        } catch (error) {
            console.log("App Write Service: GetAllPosts: Error: ", error);
            return false;
        }
    }

}

const dbService = new DBService();
export default dbService