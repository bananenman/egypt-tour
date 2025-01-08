import { MongoClient } from "mongodb";

// * Create a new client and connect to MongoDB
const uri = process.env.MONGODB_URI || "";
//const client = new MongoClient(uri);

// * Imports Schema + pass crypting thingy
import { User } from '~/server/models/user.model'
import bcrypt from 'bcrypt';

export default defineEventHandler(async (event) => {

  // Connect to database and access collection
  const database = client.db("EgyTours");
  const userData = database.collection("Users");


  const formData = await readBody(event);
  const data = await userData.findOne({
    email: formData.email,
  })

  console.log(data?.password)

  if(!data) {
    console.log("nodata")

  }

  if(data) {
    const storedHashedPassword = `${data.password}`;
    const userInputPassword = `${formData.password}`;
    
    bcrypt.compare(userInputPassword, storedHashedPassword, (err, result) => {
        if (err) {
          // Handle error
          console.error('Error comparing passwords:', err);
          return;
        }
    
    if (result) {
      // Passwords match, authentication successful
      console.log('Passwords match! User authenticated.');
    } else {
      // Passwords don't match, authentication failed
      console.log('Passwords do not match! Authentication failed.');
    }
    });
    return "Email is already being used.";
  } 

});