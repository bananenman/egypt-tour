import mongoose from "mongoose";
function defineNuxtPlugin(def) {
  return def;
}
export default defineNuxtPlugin(async () => {
  const uri = process.env.MONGODB_URI || null
  
  if (!uri) {
    console.warn(
      "Mongodb URI not found, skipping mongodb connection"
    );
    return;
  }
  try {
    await mongoose.connect(uri);
    console.info("Mongodb connected");
  } catch (e) {
    console.error("Mongodb connection error: ", e);
  }
});
