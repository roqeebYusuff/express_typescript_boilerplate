import { IUser } from "@interfaces/auth.interface";
import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = model<IUser>("User", UserSchema);

export default User;
