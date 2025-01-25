import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI || "" 
const client = new MongoClient(uri);

export default defineEventHandler(async (event) => {

    const body = await readBody<{ name: string }>(event);
    const { name } = body;

    const database = client.db("EgyTours")
    const prices = database.collection("Prices")

    const data = await prices.findOne({
        name: name,
    })

   return data;
});