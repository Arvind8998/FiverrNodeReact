import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ConversationSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  sellerId: {
    type: String,
    required: true,
  },
  buyerId: {
    type: String,
    required: true,
  },
  readByBuyer: {
    type: String,
    required: true,
    default: false,
  },
  readBySeller: {
    type: String,
    required: true,
    default: false,
  },
  lastMessage: {
    type: String,
    required: false,
  },

  timestamps,
});

export default model("Conversation", ConversationSchema);
