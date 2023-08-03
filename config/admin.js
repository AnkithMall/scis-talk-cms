const crypto = require('crypto');

function generateRandomSalt() {
  return crypto.randomBytes(16).toString('base64');
}

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET') || generateRandomSalt(),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT') || generateRandomSalt() ,
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
});
