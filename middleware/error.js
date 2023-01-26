const winston = require("winston");

module.exports = function (err, req, res, next) {
  // log exception

  //loging levels -> error, warn, info, verbose, debug, debug

  const fileLogger = winston.createLogger({
    transports: [new winston.transports.File({ filename: "logfile.log" })],
  });

  const logger = winston.createLogger({
    transports: [
      new winston.transports.MongoDB({
        db: "mongodb://localhost/vidly",
        metaKey: err,
      }),
    ],
  });

  fileLogger.error(err.message, err);
  logger.error(err.message, err);

  res.status(500).send("Something failed");
};
