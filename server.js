const express = require('express');
const bodyParser = require('body-parser');

const config = require('./src/config/appConfig');
const paymentRoutes = require('./src/routes/paymentRoutes');
const dbConnection = require('./src/db/dbConnection');
const logger = require('./src/utils/loggerUtil');
const { scanPort, findFreePort } = require('./src/utils/portScannerUtils');

const app = express();
let PORT = config.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

const initialize = async () => {
  try {
    const portResult = await scanPort(PORT);
    if (!portResult) {
      PORT = await findFreePort(PORT);
    }

    // Start server
    app.listen(PORT, () => {
      logger.warn(`Server is listening at port: ${PORT}`, {
        metadata: { origin: 'Server' },
      });
    });

    // Database connection
    dbConnection();

    // Routes
    app.use('/pay', paymentRoutes);
  } catch (error) {
    logger.error(error.message, { metadata: { origin: 'Server' } });
  }
};

initialize();
