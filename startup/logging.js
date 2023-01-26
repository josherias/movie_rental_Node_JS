const { createLogger, transports, format } = require("winston");
require("winston-mongodb");

require("express-async-errors");

module.exports = function () {
  // //catching unhandled exceptions
  createLogger({
    exceptionHandlers: [
      new transports.File({ filename: "uncaughExceptions.log" }),
      new transports.Console({ format: format.simple() }),
    ],
  });

  process.on("unhandledRejection", (ex) => {
    throw ex;
  });
};
