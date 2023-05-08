import { IUser } from "@interfaces/auth.interface";
import User from "@models/user";

export const authSignup = async (data: IUser) => {
  const response = await User.create(data);

  return response;
};
