import { MongoClient } from "mongodb";

// * Create a new client and connect to MongoDB
const uri = process.env.MONGODB_URI || "";
const client = new MongoClient(uri);

// * Imports Schema + pass crypting thingy
import { User } from '~/server/models/user.model'
import bcrypt from 'bcrypt';

export default defineEventHandler(async (event) => {
  const formData = await readBody(event);
  const data = await User.findOne({
    name: "Sieger"
  })

  const allData = await User.find()

  if(!data) {
    try {
        // Connect to database and access collection
        const database = client.db("EgyTours");
        const userData = database.collection("Users");

        // Create a document to insert
        const CryptPass = await bcrypt.hash(`${formData.password}`, 10);
        const doc = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
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

  return allData;

});