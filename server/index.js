import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import {
  deleteUser,
  getUserById,
  getUsers,
  postLogin,
  postUser,
  updateUser,
} from "./controllers/auth.js";

import authCheck from "./middleware/authMiddleware.js";
import { createCourse, getCourse } from "./controllers/course.js";

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  const conn = await mongoose.connect(MONGO_URI);
  if (conn) {
    console.log("MongoDB connected👍🏻");
  }
};
connectDB();

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Server is running",
  });
});
// User API
app.post("/register", postUser);
app.post("/login", postLogin);
app.get("/users", getUsers);
app.get("/users/:userId", authCheck, getUserById);
app.put("/user/:id", authCheck, updateUser);
app.delete("/user/:userId", deleteUser);

// Course API
app.get("/courses/:courseId", getCourse);
app.post("/courses", authCheck , createCourse);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
