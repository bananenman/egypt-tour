import { MongoClient } from "mongodb";
import { User } from '~/server/models/user.model'
// Create a new client and connect to MongoDB
const uri = process.env.MONGODB_URI || "";
const client = new MongoClient(uri);
import bcrypt from 'bcrypt';

export default defineEventHandler(async (event) => {
  const data = await User.findOne({
    name: "Sieger"
  })

  if(!data) {
    try {
        // Connect to database and access collection
        const database = client.db("EgyTours");
        const userData = database.collection("EgyTours");

        // Create a document to insert
        const CryptPass = await bcrypt.hash("a3$b44c", 10);
        const doc = {
          name: "Sieger",
          email: "StringUser@mainmaiaqo.eez",
          password: CryptPass,
        }

        // Insert the defined document into the "haiku" collection
        const result = await userData.insertOne(doc);

        // Print the ID of the inserted document
        console.log(`A document was inserted with the _id: ${result.insertedId}`);

      } finally {
        // Close the MongoDB client connection
        await client.close();
    }
  }

  if(data) {
    console.log("USER ALREADY EXISTS")
  }

  return User;
});