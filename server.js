import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import gigRoutes from "./routes/gig.route.js";
import orderRoutes from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import reviewRoute from "./routes/review.route.js";
import authRoute from "./routes/auth.route.js";

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

try {
  await mongoose.connect(process.env.MONGO);
  console.log("connection to databse is working !!!!!!");
} catch (error) {
  console.log(error);
}

app.use("/api/auth", authRoute);
app.use("/api/users", userRoutes);
app.use("/api/orders", userRoutes);
app.use("/api/gigs", gigRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);

app.listen(8000, () => {
  console.log("Server is running");
});
