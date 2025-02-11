const EventEmitter = require("events");
// we have a convention to identify a class each word starts with the capital letter.

class Logger extends EventEmitter{
    log(message){
        // Send an HTTP Request
        console.log(message);
    
        this.emit("messageLogged" , { id : 1, url: "http://localhost/3000"}); // we can pass the event that happened
    }
}


module.exports = Logger;