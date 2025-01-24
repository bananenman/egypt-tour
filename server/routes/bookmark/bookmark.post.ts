import { MongoClient, PullOperator, PushOperator } from 'mongodb'

const uri = process.env.MONGODB_URI || "" 
const client = new MongoClient(uri);

export default defineEventHandler(async (event) => {
    const body = await readBody<{ tourId: string, email: string, }>(event);
    const { tourId, email } = body;
    const database = client.db("EgyTours");
    const userData = database.collection("Users");

    const data = await userData.findOne({
        email: email,
    })
    let obj = data!.bookmarks.find((o: string) => o === tourId)

    if(!obj)
    {
        userData.findOneAndUpdate(
            {
                'email': email,
            },
            {
                $push: {
                'bookmarks': tourId
                } as unknown as PushOperator<Document>,
            } 
        );
    } else{
        userData.findOneAndUpdate(
            {
                'email': email,
            },
            {
                $pull: {
                    'bookmarks': tourId
                } as unknown as PullOperator<Document>,
            } 
        );
    }

    return;

});