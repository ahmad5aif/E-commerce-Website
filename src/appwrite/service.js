import { Account, Client, Databases } from 'appwrite';

export const client = new Client();
export const account = new Account(client);
export const databases = new Databases(client);

client
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) //API ENDPOINT
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);  // PROJECT ID