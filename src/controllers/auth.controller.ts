import { Request, Response } from "express";
import { authSignup } from "@services/auth.service";

const signUp = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await authSignup({ username, password });

    return res.status(200).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export { signUp };
