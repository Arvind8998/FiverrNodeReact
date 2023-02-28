import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique,
  },
  email: {
    type: String,
    required: true,
    unique,
  },
  password: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false,
  },
  desc: {
    type: String,
    required: false,
  },
  isSeller: {
    type: Boolean,
    default: false,
  },
  timestamps,
});

export default model("User", userSchema);
