const express = require("express");
const app = express();
const winston = require("winston");

require("./startup/logging")();
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({ format: winston.format.simple() }),
  ],
});

// throw new Error("Uncaught Exception");

const port = process.env.PORT || 3000;
app.listen(port, () => logger.info(`Listenening on port ${port}...`));
