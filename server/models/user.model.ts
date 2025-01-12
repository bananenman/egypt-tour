import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  email: String,
  password: String,
});

export const User = model("User", UserSchema);