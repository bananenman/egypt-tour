import { MongoClient } from 'mongodb'
import { useAuthUser } from '~/composables/useAuthUser';

const uri = process.env.MONGODB_URI || "" 
const client = new MongoClient(uri);

export default defineEventHandler(async (event) => {
    
    // Checks if person is even logged in
    const user = useAuthUser();
    const currentUser = useAuthUser();
    if (!user.value) {
        return 'You must create an Account to bookmark tours!';
    } 

    const body = await readBody<{ tourId: string }>(event);
    const { tourId } = body;

    const database = client.db("EgyTours");
    const userData = database.collection("Users");

    const data = await userData.findOne({
        email: currentUser.email,
    })

    if(!data.bookmark.tourId) {
        try {
            const options = { upsert: true }

            const userDocument = {
                $set: {
                    bookmarks: tourId,
                }
            }
            await userData.updateOne(userDocument, options);
        
        } finally {
            // Close the MongoDB client connection
            await client.close();
            return data;
        }
    }

    if(data.bookmark.tourId) {
            try {
                await userData.aggregate([ { $unset: [ `${tourId}` ] } ]);
            
            } finally {
                // Close the MongoDB client connection
                await client.close();
                return data;
            }
        }
    }
});