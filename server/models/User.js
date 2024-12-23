import { model, Schema } from "mongoose";
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    required: true,
    enum: ["admin", "user"],
    default: "user",
  },
  skills: { type: [String], default: [] },
  bio: { type: String, default: "" },
});

const User = model("User", userSchema);
export default User;
