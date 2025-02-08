import { MongoClient } from 'mongodb'
const uri = process.env.MONGODB_URI || "" 
const client = new MongoClient(uri);

export default defineEventHandler(async (event) => {
    const user = await getUserFromSession(event);
    const database = client.db("EgyTours");
    const userData = database.collection("Users");

    // * Ignore the error
    const data = await userData.findOne({
        email: user!.email,
    })
    return data!.bookmarks;
});