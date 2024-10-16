/**
 * function to check type of card by matching the card number
 * with regex created on basis of card types
 * @param {Number} cardNumber
 * @returns
 */

exports.getCardType = (cardNumber) => {
  const cardPatterns = {
    VISA: /^4[0-9]{12}(?:[0-9]{3})?$/,
    MASTERCARD: /^5[1-5][0-9]{14}$/,
    AMEX: /^3[47][0-9]{13}$/
    // Add more patterns if necessary
  };

  for (let [cardType, pattern] of Object.entries(cardPatterns)) {
    if (pattern.test(cardNumber)) {
      return cardType;
    }
  }
  return 'UNKNOWN';
};
