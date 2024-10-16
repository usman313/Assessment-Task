const portScanner = require('portscanner');
const dotenv = require('dotenv');
const logger = require('./loggerUtil');

dotenv.config();

async function scanPort (desiredPort) {
  return new Promise((resolve, reject) => {
    portScanner.checkPortStatus(
      desiredPort,
      process.env.DB_URL,
      (error, status) => {
        if (error) {
          logger.error('Failed to check port status', {
            metadata: { origin: 'Utils' },
          });
          console.error(error.message);
          reject(error);
        } else {
          if (status.toLocaleLowerCase() === 'closed') {
            resolve(true);
          } else {
            resolve(false);
          }
        }
      }
    );
  });
}

async function findFreePort (desiredPort) {

  return new Promise((resolve, reject) => {
    portScanner.findAPortNotInUse(desiredPort, 4000, (error, port) => {
      if (error) {
        logger.error('Failed to find free port', {
          metadata: { origin: 'Utils' },
        });
        reject(error);
      } else {
        resolve(port);
      }
    });
  });
}

module.exports = {
  findFreePort,
  scanPort,
};
