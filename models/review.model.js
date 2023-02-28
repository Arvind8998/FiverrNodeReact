import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ReviewSchema = new Schema({
  gigId: {
    type: String,
    required: true,
    unique,
  },

  userId: {
    type: String,
    required: true,
    enum: [1, 2, 3, 4, 5],
  },
  star: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },

  timestamps,
});

export default model("Review", ReviewSchema);
