const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  fullName: String,
  amount: String,
  currency: String,
  cardType: String,
  paymentResponse: Object,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
