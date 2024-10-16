const gateway = require('../config/braintreeConfig');
const { saveOrderToDb } = require('../db/daos/order');

/**
 *
 * @param {Object} order
 * @param {Object} creditCardDetails
 * @param {String} paymentType
 * @returns
 */
exports.processPayment = async (order, creditCardDetails, paymentType) => {
  /**
   * In order to fulfil PayPal payment, we need paymentMethodNonce
   * and PayPal-SDK client_secret and client_id which is not available
   * in this region.
   * Following function will process payment for both PayPal and Others
   * via braintree
   */
  try{
    const res = await gateway.transaction.sale({
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
    });

    if(res.success){
      await saveOrderToDb(res.transaction);

      return true;
    }
  }catch(error){
    throw new Error(result.message);
  }
};
