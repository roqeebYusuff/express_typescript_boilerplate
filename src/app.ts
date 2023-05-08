import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import router from "@routes/index";

const app = express();

// ** CORS **
app.use(cors());

// ** MORGAN **
app.use(morgan("dev"));
app.use(express.json()); // ? for parsing application/json
app.use(express.urlencoded({ extended: true })); // ? for parsing application/x-www-form-urlencoded

// ** ROUTES **
app.get("/", (req: Request, res: Response) => {
  return res.status(200).send("Api is running");
});

router(app);

// ** Undefined Routes **
app.use("*", (req: Request, res: Response) => {
  return res.status(404).json({
    success: false,
    message: "API endpoint doesn't exist",
  });
});

export default app;
