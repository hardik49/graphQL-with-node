require('dotenv').config();
export default {
  port: process.env.APP_PORT || 3000,
  dbUser: process.env.DB_USER || '',
  dbPassword: process.env.DB_PASS || '',
  dbName: process.env.DB_NAME || '',
}