const mongoose = require('mongoose');

const logger = require('../utils/loggerUtil');
const config = require('../config/appConfig');
module.exports = async () => {
  mongoose.connect(`${config.MONGODB_URI}/payment_gateway`);

  const db = mongoose.connection;
  db.on('error', (err) => {
    logger.error(err.message, { metadata: { origin: 'Database' } });
  });

  db.once('open', () => {
    logger.info('Database connection established successfully', { metadata: { origin: 'Database' } });
  });
};
