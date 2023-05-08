import Joi from "joi";

export const schema = {
  NODE_ENV: Joi.string()
    .valid("development", "production", "test")
    .default("development"),
  PORT: Joi.number().default(7000),
  MONGO_LOCAL_DB: Joi.string().required(),
  MONGO_LOCAL_DB_NAME: Joi.string().required(),
  MONGO_DB: Joi.string().required(),
  MONGO_DB_NAME: Joi.string().required(),
  MONGO_TEST_DB: Joi.string(),
  MONGO_TEST_DB_NAME: Joi.string(),
};
