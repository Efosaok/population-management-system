import dotenv from 'dotenv';

dotenv.config();

export default {
  databaseUrl: process.env.DB_URL,
  env: process.env.NODE_ENV,
};
