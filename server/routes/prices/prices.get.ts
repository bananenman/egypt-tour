import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI || "" 
const client = new MongoClient(uri);

export default defineEventHandler(async (event) => {

    const name = getHeaders(event).referer!.split('/')

    const database = client.db("EgyTours")
    const prices = database.collection("Prices")

    const data = await prices.findOne({
        name: name[4],
    })

   return data;
});