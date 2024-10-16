const braintreeService = require('../services/braintreeService');
const cardUtils = require('../utils/cardUtils');

exports.processPayment = async (req, res) => {
  const { amount, currency, holderName, cardNumber, expirationMonth, expirationYear, cvv } = req.body;

  if(!req.body || !amount || !currency || !holderName || !cardNumber || !expirationMonth || !expirationYear || !cvv){
    return res.status(400).send('No or Invalid parameters');
  }

  const cardType = cardUtils.getCardType(cardNumber);

  const order = {
    amount,
    currency,
    cardType
  };

  const creditCardDetails = {
    holderName,
    number: cardNumber,
    expirationMonth,
    expirationYear,
    cvv
  };

  // Process payment based on the rules
  if (cardType === 'AMEX' && currency !== 'USD') {
    return res.status(400).send('AMEX can only be used for USD payments.');
  }

  /**
   * Card type check whether paypal service will be utilized of braintree
   * right now, I can't create PayPal client_id and secret_key as I need
   * US based number to to signup
   */
  const paymentProcessor = (cardType === 'AMEX' || ['USD', 'EUR', 'AUD'].includes(currency)) ? 'paypal' : 'braintree';

  try {
    const paymentResult = await braintreeService.processPayment(order, creditCardDetails, paymentProcessor);

    if(paymentResult){
      res.send('Payment successful');
    }
  } catch (error) {
    res.status(400).send(`Payment failed: ${error.message}`);
  }
};
