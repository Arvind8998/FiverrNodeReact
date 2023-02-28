import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

try {
  await mongoose.connect(process.env.MONGO);
  console.log("connection to databse is working !!!!!!");
} catch (error) {
  console.log(error);
}

app.use("/api/users", userRoutes);
app.use("/api/users", userRoutes);
app.use("/api/users", userRoutes);
app.use("/api/users", userRoutes);
app.use("/api/users", userRoutes);
app.use("/api/users", userRoutes);

app.listen(8000, () => {
  console.log("Server is running");
});
