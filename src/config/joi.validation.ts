import * as joi from 'joi';

export const JoiValidationSchema = joi.object({
  MONGODB: joi.required(),
  PORT: joi.number().default(3001),
  POKEMON_DEFAULT_PAGINATION_LIMIT: joi.required().default(5),
});
