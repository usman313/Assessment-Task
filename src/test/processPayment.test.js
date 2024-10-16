const paymentController = require('../controllers/paymentController');
const braintreeService = require('../services/braintreeService');
const cardUtils = require('../utils/cardUtils');

jest.mock('../services/braintreeService');
jest.mock('../utils/cardUtils');

describe('Payment Controller', () => {
  let req, res;

  beforeEach(() => {
    req = {
      body: {}
    };
    res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
      json: jest.fn()
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should return error for missing parameters', async () => {
    await paymentController.processPayment(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith('No or Invalid parameters');
  });

  test('should return error if AMEX is used with non-USD currency', async () => {
    req.body = {
      amount: 10,
      currency: 'EUR',
      holderName: 'M. Usman',
      cardNumber: '378282246310005',
      expirationMonth: '12',
      expirationYear: '2024',
      cvv: '111'
    };
    cardUtils.getCardType.mockReturnValue('AMEX');

    await paymentController.processPayment(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith('AMEX can only be used for USD payments.');
  });

  test('should use PayPal for AMEX', async () => {
    req.body = {
      amount: 11,
      currency: 'USD',
      holderName: 'M. Bilal',
      cardNumber: '378282246310005',
      expirationMonth: '09',
      expirationYear: '2025',
      cvv: '112'
    };
    cardUtils.getCardType.mockReturnValue('AMEX');

    braintreeService.processPayment.mockResolvedValue(true);

    await paymentController.processPayment(req, res);
    expect(braintreeService.processPayment).toHaveBeenCalledWith(
      { amount: 11, currency: 'USD', cardType: 'AMEX' },
      {
        holderName: 'M. Bilal',
        number: '378282246310005',
        expirationMonth: '09',
        expirationYear: '2025',
        cvv: '112'
      },
      'paypal'
    );
    expect(res.send).toHaveBeenCalledWith('Payment successful');
  });

  test('should use PayPal for USD currency', async () => {
    req.body = {
      amount: 14,
      currency: 'AUD',
      holderName: 'Azeem Poalla',
      cardNumber: '4111111111111111',
      expirationMonth: '02',
      expirationYear: '2027',
      cvv: '115'
    };
    cardUtils.getCardType.mockReturnValue('Visa');

    braintreeService.processPayment.mockResolvedValue(true);

    await paymentController.processPayment(req, res);
    expect(braintreeService.processPayment).toHaveBeenCalledWith(
      { amount: 14, currency: 'AUD', cardType: 'Visa' },
      {
        holderName: 'Azeem Poalla',
        number: '4111111111111111',
        expirationMonth: '02',
        expirationYear: '2027',
        cvv: '115'
      },
      'paypal'
    );
    expect(res.send).toHaveBeenCalledWith('Payment successful');
  });

  test('should use Braintree for other cases', async () => {
    req.body = {
      amount: 101,
      currency: 'GBP',
      holderName: 'M. Raheem',
      cardNumber: '4111111111111111',
      expirationMonth: '11',
      expirationYear: '2029',
      cvv: '117'
    };
    cardUtils.getCardType.mockReturnValue('Visa');

    braintreeService.processPayment.mockResolvedValue(true);

    await paymentController .processPayment(req, res);
    expect(braintreeService.processPayment).toHaveBeenCalledWith(
      { amount: 101, currency: 'GBP', cardType: 'Visa' },
      {
        holderName: 'M. Raheem',
        number: '4111111111111111',
        expirationMonth: '11',
        expirationYear: '2029',
        cvv: '117'
      },
      'braintree'
    );
    expect(res.send).toHaveBeenCalledWith('Payment successful');
  });
});
