import { RequestHandler } from "express";
import { isObjEmpty } from "@utils/utils";

export const verifyRequest: RequestHandler = (req, res, next) => {
  if (isObjEmpty(req.body)) {
    return res.status(400).json({
      success: false,
      message: "Request body cannot be empty",
    });
  }

  next();
};
