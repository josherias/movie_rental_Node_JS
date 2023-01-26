const winston = require("winston");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({ format: winston.format.simple() }),
  ],
});

module.exports = function () {
  mongoose
    .connect("mongodb://localhost/vidly")
    .then(() => logger.info("Connected to MongoDb.."))
    .catch((err) => fileLogger.error(err.message, err));
};
