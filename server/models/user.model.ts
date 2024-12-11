import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  company: String,
  shortDescription: String,
  password: String,
});

export const User = model("User", UserSchema);