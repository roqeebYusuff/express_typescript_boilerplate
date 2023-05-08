import dotenv from "dotenv";
import { Validator } from "./validator.env";
import { schema } from "./schema.env";
import { types } from "./types";
dotenv.config();

// ** validate env variables
const envVars = Validator(schema);

const { error, value: env } = envVars.validate(process.env);

if (error)
  throw new Error(
    `Config validation error: Ensure you have all the required variables in your .env file. \n${error.message}`
  );

const config: types = {
  NODE_ENV: env.NODE_ENV,
  PORT: env.PORT,
  MONGO_LOCAL_DB: env.MONGO_LOCAL_DB,
  MONGO_LOCAL_DB_NAME: env.MONGO_LOCAL_DB_NAME,
  MONGO_DB: env.MONGO_DB,
  MONGO_DB_NAME: env.MONGO_DB_NAME,
  MONGO_TEST_DB: env.MONGO_TEST_DB,
  MONGO_TEST_DB_NAME: env.MONGO_TEST_DB_NAME,
};

export default config;
