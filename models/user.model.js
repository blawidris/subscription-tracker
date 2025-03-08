import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      typed: String,
      required: [true, "Name is required"],
      trim: true,
      minLength: 2,
      maxLength: 50,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Valid email address required"],
    },
    password: {
      type: String,
      required: [true, "password required"],
      minLength: 6,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema)

export default User;