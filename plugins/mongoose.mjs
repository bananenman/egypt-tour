import mongoose from "mongoose";
import { useRuntimeConfig } from "#imports";
function defineNuxtPlugin(def) {
  return def;
}
export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig();
  if (!config.nuxtServerUtils?.mongodbUri) {
    console.warn(
      "Mongodb URI not found in runtime config, skipping mongodb connection"
    );
    return;
  }
  try {
    await mongoose.connect(config.nuxtServerUtils.mongodbUri);
    console.info("Mongodb connected");
  } catch (e) {
    console.error("Mongodb connection error: ", e);
  }
});
