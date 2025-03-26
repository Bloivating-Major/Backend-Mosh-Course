# Introduction
    - In this session we will learn Middleware, Configuration, Debugging, Template Engine and much more.
# Middleware
    - Middleware function takes a req objec and either returns a response to the client or passes control to another middleware function
    - When we send a request to server it goes through middleware function
    - request is sent through request processing pipeline and middleware are present in request processing pipeline
    - request --->  json() middleware function ---> route() middleware function ---> response
    - this middleware function either terminates the request or passes control to another middleware function
    - express has few built in middleware functions but we can create our own custom middleware function
# Creating Custom Middleware
```javascript   
    app.use((req, res, next)=>{
    console.log("Logging...");
    next(); // if no error then call next function
    })
```
   - Here we have created our custom middleware function which logs on console
   - Here next( ) this function passes control to next middleware function in pipeline
   - If we don't use next then our request will be hanging
   - We should always terminate the request response cycle.
- Creating another middleware function for authentication
```javascript
app.use((req, res, next)=>{
    console.log("Authenticating...");
    next(); // if no error then call next function
})
```
- In terms of clean coding you don't write all you middleware function in index file 
- You create a seperate module for each middleware function and then use it in index file
# Built-in Middleware
- We have a few built-in middleware functions in express.
```javascript
app.use(express.json()); // it is a middleware
app.use(express.urlencoded({extended: true})); // key=value&key 
app.use(express.static('public')); // used to serve static content
```
- static files are served from root directory
# Third-party Middleware
```javascript
// Third Party Middleware
app.use(helmet()); // protects the http headers
app.use(morgan("tiny")); // we use morgan to log http requests
```
- Make sure to use only necessary middleware because it may slow down the performance of the application
# Environments
- In a more complex backend application you need to know what kind of environment your code is running on.
- Perhaps you may want to enable or disable certain features based on the environment

```javascript
app.get("env"); // this by default is set to development

if (app.get("env") == "development") {
  app.use(morgan("tiny")); // we use morgan to log http requests
  console.log("Morgan enable");
}
```
# Configuration

```javascript
const config = require('config');

// Configuration

console.log(`Application Name : ${config.get('name')}`);
console.log(`Mail Server Name : ${config.get('mail.host')}`);
```

- create a config folder
- install config package
- then create json files.
- and use it.

# Debugging
- Better way to log message for purpose of Debugging is using debug package in node.
- install debug package
```javascript
// Debugging Episode
let startupDebugger  = require('debug')('app:startup');
let dbDebugger = require('debug')('app:db');


const morgan = require('morgan');
const express = require('express');
const app = express();

if(app.get('env') === 'development'){
  app.use(morgan('tiny'));
  startupDebugger('Morgan enabled');
}

// Database Work
dbDebugger("Connected to database")

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
```
# Templating Engines
# Database Integration
# Authentication
# Structuring Express Applications
# Project- Restructure the App
# Express- Advanced Topics Recap