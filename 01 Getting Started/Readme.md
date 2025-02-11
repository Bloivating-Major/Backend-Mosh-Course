1. What is Node?
    - Open source and cross platform run time environment for executing JavaScript outside of browser
    - We often use node to build backend services and application programming interfaces.
    - Node is ideal for building highly scalable data intensive and real time applications
    - Node is easy to target and great for prototyping and agile development
    - used for building superfast and highly scalable applications
    - used in production by large companies like paypal netflix and other companies.
    - it has large ecosystem and open source librarys

2. Node Architecture
    - What is a runtime environment?
        - Before node javascript was used only in browser to run JavaScript
        - Browser provides runtime environment for running JavaScript
        - Ryan Dhal Developer created node js in 2009 he took out googles v8 engine from chrome and build node using it.
        - Node is not a programming language
        - Node is also not a framework
        - It's just a runtime environment

3. How node works?
    - Node application are highly scalable this is because of Non Blocking / Asynchronous application
    - A single thread is used to handle multiple requests.
    - We have concept of event queue in node js and because of that it is async
    - Do not use Node for CUP intensive apps

4. Installing Node!
    - run node --version 
    - if you get any error then open your browser and then search node js and then download node js
    - again check for node version it will be installed
    - follow the documentation

5. Your first node program
    -  make a directory in you laptop and then create a file app.js
    - write regular js 
    ```javascript
        function sayHello(name){
            console.log("Hello" + name);
        }
        sayHello("Sambha");
    ```
    - type node and yourfile name to run the file
    - you won't get window object in node js 

