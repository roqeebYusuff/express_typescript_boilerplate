import { Router } from "express";
import { signUp } from "@controllers/auth.controller";
import { verifyRequest } from "@middlewares/verifyRequest";

const router = Router();

router.post("/signup", verifyRequest, signUp);

export default router;
