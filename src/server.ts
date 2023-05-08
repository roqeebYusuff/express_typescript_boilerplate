import connectDB from "@config/db";
import app from "./app";
import config from "@config/env";

connectDB().then(() => {
  app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
  });
});
