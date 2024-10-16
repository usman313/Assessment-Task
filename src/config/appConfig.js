const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

module.exports = {
  PORT: Number(process.env.PORT),

  // Braintree Credentials
  BRAINTREE_MERHANT_ID: process.env.BRAINTREE_MERHANT_ID,
  BRAINTREE_PUBLIC_KEY: process.env.BRAINTREE_PUBLIC_KEY,
  BRAINTREE_PRIVATE_KEY: process.env.BRAINTREE_PRIVATE_KEY,

  // MongoDB variables
  MONGODB_URI: process.env.DATABSE_URI
};
