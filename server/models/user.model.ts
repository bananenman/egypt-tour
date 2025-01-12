import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  id: String,
  email: String,
  password: String,
  roles: String,
});

export const User = model("User", UserSchema);