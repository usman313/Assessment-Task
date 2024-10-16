const orderModel = require('../../models/orderModel');

const saveOrderToDb = async (data)=>{
  const { customer, amount, currencyIsoCode, creditCard, paymentReceipt } = data;

  const order = new orderModel({
    fullName: `${customer.firstName} ${customer.lastName}`,
    amount: amount,
    currency: currencyIsoCode,
    cardType: creditCard.cardType,
    paymentResponse: paymentReceipt
  });
  await order.save();
};

module.exports = {
  saveOrderToDb
};
