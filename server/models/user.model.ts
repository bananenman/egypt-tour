import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  id: String,
  email: String,
  password: String,
  roles: String,
  bookmarks: Array,
});

export const User = model("User", UserSchema);