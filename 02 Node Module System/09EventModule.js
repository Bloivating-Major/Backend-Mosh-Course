const Logger = require('./03creatingModule');
const logger = new Logger();

// Listener for the event
logger.on("messageLogged", (arguments) => {
  console.log("A message was logged" , arguments);
});

logger.log("message");
