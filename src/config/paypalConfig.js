const paypal = require('paypal-rest-sdk');

paypal.configure({
  mode: 'sandbox',
  client_id: 'PAYPAL_CLIENT_ID',
  client_secret: 'PAYPAL_CLIENT_SECRET',
});

module.exports = paypal;
