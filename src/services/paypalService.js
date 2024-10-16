const gateway = require('../config/braintreeConfig');

exports.processPayment = (order, creditCardDetails) => {
  return gateway.transaction.sale({
    amount: order.amount,
    creditCard: {
      number: creditCardDetails.number,
      expirationMonth: creditCardDetails.expirationMonth,
      expirationYear: creditCardDetails.expirationYear,
      cvv: creditCardDetails.cvv
    },
    options: {
      submitForSettlement: true
    }
  }).then(result => {
    if (result.success) {
      return result.transaction;
    } else {
      throw new Error(result.message);
    }
  });
};
