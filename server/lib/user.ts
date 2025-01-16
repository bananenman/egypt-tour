import { MongoClient } from "mongodb";

// * Create a new client and connect to MongoDB
const uri = process.env.MONGODB_URI || "";
const client = new MongoClient(uri);

  // Connect to database and access collection
  const database = client.db("EgyTours");
  const userData = database.collection("Users");
  
  export async function findAllUsers() {
    const data = await userData.find()
    return data
  }
  
  export async function findUserByEmail(email: string) {
    const data = await userData.findOne({
      email: email,
    })

    return data;
  }
  
  export async function findUserById(id: string) {
    const data = await userData.findOne({
      id: id,
    })

    if(data) {
      return data;
    }

    if(!data) {
      return "Not Found!"
    }
  }