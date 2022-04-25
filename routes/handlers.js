const pino = require("pino");

let request_number = 0;

const logger = pino({
  transport: {
    target: "pino-pretty",
    options: { translateTime: true },
  },
});

const indexHandler = (req, res) => {
  var current_time = new Date();
  request_number += 1;
  logger.info(`${currentTime} Hello`);

  res.send(
    `Hello! The current server time in is ${current_time}. The server has responded to ${request_number} requests since it started.`
  );
};

const sayHelloHandler = (req, res) => {
  const name = req.params.name || "Friend";
  const currentTime = new Data();
  logger.info(`${currentTime} Hello ${name}`);

  res.send(`Hello ${name}!`);
};

module.exports = { indexHandler, sayHelloHandler };
