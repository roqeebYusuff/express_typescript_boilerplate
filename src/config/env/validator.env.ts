import Joi from "joi";

export const Validator = (schema: any) =>
  Joi.object().keys(schema).unknown().required();
