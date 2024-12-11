
import { MongoClient } from "mongodb";
var uri = process.env.MONGODB_URI;
// Create a new client and connect to MongoDB
const client = new MongoClient(uri);

async function run() {

  try {
    // Connect to database and access collection
    const database = client.db("EgyTours");
    const userData = database.collection("EgyTours");

    // Create a document to insert

    const doc = {
      title: "Record of a Shriveled Datum",
      content: "No bytes, no problem. Just insert a document, in MongoDB",
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

run()