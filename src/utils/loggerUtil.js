const winston = require('winston');
const { logColors, logLevels } = require('../constants/loggerConstants');

const logger = winston.createLogger({
  level: 'silly',
  levels: logLevels,
  format: winston.format.combine(
    winston.format.colorize({
      all: true,
      colors: logColors
    }),
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.printf(({ level, timestamp, message, metadata }) => {
      const origin =
        metadata && metadata.origin ? `[${metadata.origin}] - ` : '';
      return `${level}: ${origin}[${timestamp}] - ${message}`;
    })
  ),
  transports: [new winston.transports.Console()],
});

module.exports = logger;
