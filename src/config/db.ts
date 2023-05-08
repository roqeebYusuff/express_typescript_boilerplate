import mongoose from "mongoose";
import config from "./env";

const options: object = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const {
  MONGO_DB,
  MONGO_DB_NAME,
  MONGO_LOCAL_DB,
  MONGO_LOCAL_DB_NAME,
  NODE_ENV,
  MONGO_TEST_DB,
  MONGO_TEST_DB_NAME,
} = config;

/**
 * Connect to the database
 * @returns {Promise<boolean>}
 * @description
 * This function connects to the database based on the environment
 *
 * @example
 * import connectDB from "@config/db";
 *
 * const startServer = async () => {
 *  try {
 *      await connectDB();
 *      app.listen(PORT, () => {
 *        console.log(`Server is running on port ${PORT}`);
 *      });
 * } catch (error) {
 *  console.log(error)}
 * };
 *
 * startServer();
 *
 */
const connectDB = () => {
  return new Promise((resolve, reject) => {
    let dbUrl: string = "";
    let dbName: string = "";

    switch (NODE_ENV) {
      case "test":
        dbUrl = MONGO_TEST_DB;
        dbName = MONGO_TEST_DB_NAME;
        break;
      case "production":
        dbUrl = MONGO_DB;
        dbName = MONGO_DB_NAME;
        break;
      case "development":
        dbUrl = MONGO_LOCAL_DB;
        dbName = MONGO_LOCAL_DB_NAME;
      default:
    }

    mongoose.connect(dbUrl, { ...options, dbName });

    const db = mongoose.connection;

    // **
    db.on("connected", () => {
      console.log(`Mongoose connected to ${NODE_ENV} db`);
      resolve(true);
    });

    db.on("error", (err) => {
      console.log(`Mongoose connection error: ${err.message}`);
      reject(false);
    });
  });
};

export default connectDB;
