import mongoose from "mongoose";
const { Schema, model } = mongoose;

const OrderSchema = new Schema({
  gigId: {
    type: String,
    required: true,
    unique,
  },
  img: {
    type: String,
    required: true,
    unique,
  },
  title: {
    type: String,
    required: true,
    unique,
  },
  price: {
    type: String,
    required: true,
    unique,
  },
  sellerId: {
    type: String,
    required: true,
    unique,
  },
  buyerId: {
    type: String,
    required: true,
    unique,
  },
  isCompleted: {
    type: Boolean,
    default: false,
    unique,
  },
  payment_intent: {
    type: String,
    required: true,
  },
  timestamps,
});

export default model("Order", OrderSchema);
