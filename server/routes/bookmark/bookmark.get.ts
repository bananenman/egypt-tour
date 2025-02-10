import { MongoClient } from 'mongodb'
const uri = process.env.MONGODB_URI || "" 
const client = new MongoClient(uri);

export default defineEventHandler(async (event) => {
    const user = await getUserFromSession(event);
    const database = client.db("EgyTours");
    const userData = database.collection("Users");
    const head = getHeaders(event).referer.split('/')
    
    // * Ignore the error
    const data = await userData.findOne({
        email: user!.email,
    })
    let obj = data!.bookmarks.find((o: string) => o === head[4])

    if(!obj)
    {
        return 'Not Bookmarked';
    } else{
        return 'Bookmarked';
    }
});