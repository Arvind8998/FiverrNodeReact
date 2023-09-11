import mongoose from "mongoose";
required: true;
const { Schema, model } = mongoose;

const GigSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    totalStars: {
      type: Number,
      required: true,
    },
    starNumber: {
      type: Number,
      required: true,
    },
    cat: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    shortTitle: {
      type: Number,
      default: 0,
    },
    shortDesc: {
      type: Number,
      default: 0,
    },
    deliveryTime: {
      type: Number,
      default: 0,
    },
    revisionNumber: {
      type: Number,
      default: 0,
    },
    features: {
      type: [String],
      required: true,
    },
    sales: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Gig", GigSchema);
