import { MongoClient } from 'mongodb'
import { useAuthUser } from '~/composables/useAuthUser';

const uri = process.env.MONGODB_URI || "" 
const client = new MongoClient(uri);

export default defineEventHandler(async (event) => {
    
    // Checks if person is even logged in
    const user = useAuthUser();
    const currentUser = useAuthUser();
    if (!user.value) {
        return '/users/register';
    } 

    const database = client.db("EgyTours");
    const userData = database.collection("Users");

    const data = await userData.findOne({
        email: currentUser.email,
    })

    if(!data.bookmark.tourId) {
      return "You do not have any bookmarks.";
    }

    if(data.bookmark.tourId) {
        return data.bookmark.tourId;
    }
});