import mongoose from "mongoose";
const { Schema, model } = mongoose;

const MessageSchema = new Schema({
  ConversationId: {
    type: String,
    required: true,
  },
  UserId: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },

  timestamps,
});

export default model("Message", MessageSchema);
