import { Client, Account, Databases } from 'appwrite';


const API_ENDPOINT : any = process.env.API_ENDPOINT;
const PROJECT_ID : any = process.env.PROJECT_ID

const client = new Client()
    .setEndpoint(API_ENDPOINT) 
    .setProject(PROJECT_ID);    

export const account = new Account(client);
export const database = new Databases(client);

export default client;