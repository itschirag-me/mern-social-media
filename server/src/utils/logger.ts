import winston, { format } from "winston";

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: format.combine(
        format.colorize(),
        format.timestamp(),
        format.printf((info) => {
          return `${info.timestamp} [${info.level}] : ${typeof info.message == "string" ? info.message : JSON.stringify(
            info.message
          )}`;
        })
      ),
    }),
    new winston.transports.File({
      filename: "./logs.log",
      format: format.combine(
        format.timestamp(),
        format.printf((info) => {
          return `${info.timestamp} [${info.level}] : ${JSON.stringify(
            info.message
          )}`;
        })
      ),
    }),
  ],
});

export default logger;
