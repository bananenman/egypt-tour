import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  id: String,
  email: String,
  password: Array,
  roles: String,
});

export const User = model("User", UserSchema);