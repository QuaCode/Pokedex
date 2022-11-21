export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  mongoDd: process.env.MONGODB,
  port: +process.env.PORT || 30001,
  pokemonDefaultPaginationLimit: +process.env.POKEMON_DEFAULT_PAGINATION_LIMIT || 5,
});
