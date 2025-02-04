import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "";
const client = new MongoClient(uri);


export default defineEventHandler(async (event) => {

    const user = await getUserFromSession(event);
    const database = client.db("EgyTours");
    const userData = database.collection("Users");

    const data = await userData.findOne({
        email: user!.email,
    })

    if(!data) {
        try {

        // Define document to insert
        const userDocument = {
            prices: [],
        }

        await userData.insertOne(userDocument);


        } finally {
        // Close the MongoDB client connection
        await client.close();
    }

    }

    if(data) {
        return;
    }

});