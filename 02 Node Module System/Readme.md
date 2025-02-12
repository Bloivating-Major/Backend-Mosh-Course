# 📌 Node.js Module System

## 🌍 1. Global Object
- `console.log()` is globally accessible.
- `setTimeout()`, `clearTimeout()`, `setInterval()`, and `clearInterval()` are also global functions.
- `var` is a global object.
- In Node.js, the global object is `global`.

## 📦 2. Modules
- Avoid declaring variables and functions in the global scope.
- Modularity helps structure code into smaller, reusable blocks.
- Using modules prevents variable name conflicts.
- In Node.js, everything is wrapped inside a **module**.
- Variables and functions inside a module are scoped to that module.
- To use them outside, explicitly **export** and **import** them.

## 🏗️ 3. Creating a Module
```javascript
var url = "http://mylogger.in/log";

function log(message){
    // Send an HTTP Request
    console.log(message);
}

module.exports.log = log;
module.exports.endPoint = url;
```

## 📥 4. Loading a Module
```javascript
const logger = require('./03creatingModule'); // Importing a module
logger("Hello");
```

## 🔒 5. Module Wrapper Function
- Node.js uses an **Immediately Invoked Function Expression (IIFE)** to wrap each module.
- This provides module privacy.
- The wrapper function includes: `require`, `exports`, `module`, `__filename`, `__dirname`.

```javascript
console.log(__dirname);
console.log(__filename);
```

## 📂 6. Path Module
```javascript
const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);
```

## 💻 7. OS Module
```javascript
const os = require('os');
console.log(os.totalmem(), os.freemem());
```

## 📁 8. File System Module
```javascript
const fs = require('fs');
fs.readdir('./', (err, files) => {
    if(err) throw err;
    console.log(files);
});
```

## 🔔 9. Event Module
- Events are signals that something happened.
```javascript
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("messageLogged", () => {
  console.log("A message was logged");
});

emitter.emit("messageLogged");
```

## 📡 10. Event Arguments
```javascript
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("messageLogged", (args) => {
  console.log("A message was logged", args);
});

emitter.emit("messageLogged", { id: 1, url: "http://localhost/3000" });
```

## 🎭 11. Extending EventEmitter
**logger.js**
```javascript
const EventEmitter = require("events");
class Logger extends EventEmitter{
    log(message){
        console.log(message);
        this.emit("messageLogged", { id: 1, url: "http://localhost/3000" });
    }
}
module.exports = Logger;
```

## 🌐 12. HTTP Module
```javascript
const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write("Hello World");
        res.end();
    }
});
server.listen(3000);
console.log('Listening on port 3000...');
```
- A simple web server using Node.js! 🚀

