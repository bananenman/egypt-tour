import { MongoClient } from "mongodb";
import { serialize, sign } from "../../lib/cookie";
import { hashPassword } from '~/server/lib/password'

const uri = process.env.MONGODB_URI || "";
const client = new MongoClient(uri);


export default defineEventHandler(async (event) => {

  // ! IMPORTANT: Gets the formData posted by useAuth
  const body = await readBody<{ email: string; password: string; rememberMe: boolean }>(event);
  const { email, password, rememberMe } = body;

  // Connect to database and access collection
  const database = client.db("EgyTours");
  const userData = database.collection("Users");

  const data = await userData.findOne({
    email: email,
  })

  const userPass = (await hashPassword(password)).toString()

  if(!data) {
    try {

      // * Uses crypto to make unique ID
      var userId = new Uint32Array(1);
      crypto.getRandomValues(userId);

      // Define document to insert
      const userDocument = {
        id: userId,
        email: email,
        password: userPass,
        roles: 'USER',
        bookmarks: [],
      }

      const result = await userData.insertOne(userDocument);
      console.log(`A document was inserted with the _id: ${result.insertedId}`);

      const config = useRuntimeConfig();
    
      const session = serialize({ userId: userId });
      const signedSession = sign(session, config.cookieSecret);
    
      setCookie(event, config.cookieName, signedSession, {
        httpOnly: true,
        path: "/",
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
        expires: rememberMe
          ? new Date(Date.now() + parseInt(config.cookieRememberMeExpires))
          : new Date(Date.now() + parseInt(config.cookieExpires)),
      });

      const userWithPassword = userDocument;
      const { password: _password, ...userWithoutPassword } = userWithPassword;

      return {
        user: userWithoutPassword,
      };

    } finally {
      // Close the MongoDB client connection
      await client.close();
  }

  }

  if(data) {
    return;
  }

});