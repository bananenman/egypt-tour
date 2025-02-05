import { MongoClient, PushOperator } from "mongodb";

const uri = process.env.MONGODB_URI || "";
const client = new MongoClient(uri);


export default defineEventHandler(async (event) => {

    const user = await getUserFromSession(event);
    const database = client.db("EgyTours");
    const priceData = database.collection("Prices");

    const data = await priceData.findOne({
        email: user!.email,
    })

    if(!data) {
        try {

        // Define document to insert
        const userDocument = {
            prices: [],
        }

        await priceData.insertOne(userDocument);


        } finally {
        // Close the MongoDB client connection
        await client.close();
        }
    }

    if(data) {
        priceData.findOneAndUpdate(
            {
                'email': email,
            },
            {
                $push: {
                    'prices':
                } as unknown as PushOperator<Document>,
            } 
        );
    }

});