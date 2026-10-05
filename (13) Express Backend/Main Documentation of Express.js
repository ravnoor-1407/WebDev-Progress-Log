// Express for Backend

//NOTE: We installed nodemon to automatically restart the server whenever we make changes to the code. 

// A Node.js web application that helps us to create web applications and APIs.
// It is used for server-side development
// It provides a robust set of features for building web and mobile applications. 
// Express simplifies the process of handling HTTP requests, routing, middleware, and more.

// 1. It listens for incoming requests from clients (like web browsers)
// 2.It parses the request, determines what the client is asking for, and sends back an appropriate response.
// 3. It matches responses to the correct route and executes the corresponding code to generate the response.

// Creating a simple Express server
const express = require('express');
const app = express();

// Ports are logical endpoints of a network connection that is used to exchange information between a web server and a web client.
let port = 3000;

// listen() method: Starts the server and listens for incoming requests on the specified port
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

// Routing: It is the process of selecting a path for traffic in a network or between or across multiple networks. In Express, routing refers to how an application’s endpoints (URIs) respond to client requests.
// get() method: Defines a route that listens for GET requests on a specific path. It takes two arguments: the path and a callback function that defines how to handle the request and send a response back to the client.

/*
app.get('/', (req, res) => {
    console.log('GET request received for the Home Page');
    res.send('Welcome to the Home Page!');
});
*/

app.get('/about', (req, res) => {
    console.log('GET request received for the About Page');
    res.send('Welcome to the About Page!');
});

app.get('/users', (req, res) => {
    console.log('GET request received for the Users Page');
    res.send('Welcome to the Users Page!');
});

// Path Parameters
app.get('/users/:userName/:userId', (req, res) => {
    const {userName, userId} = req.params;
    const htmlString = `<h1>Welcome to the page of @${userName}</h1><p>Your User ID is: ${userId}</p>`;
    console.log(`GET request received for User Name: ${userName}, User ID: ${userId}`);
    res.send(htmlString);
});

app.get('/search', (req, res) => {
    const { q } = req.query;
    console.log(`GET request received for search query: ${q}`);
    if (!q) {
        res.send('No search query provided.');
        return;
    }
    res.send(`Search results for: ${q}`);
});

// post method(): Defines a route that listens for POST requests on a specific path. It takes two arguments: the path and a callback function that defines how to handle the request and send a response back to the client.
app.post('/users', (req, res) => {
    console.log('POST request received for the Users Page');
    res.send('User created successfully!');
});

// use() method: Executes a callback function for every incoming request to the server, regardless of the HTTP method or route.
app.use((req, res) => {
    console.log('Request received!');
    res.send("Hello, World! I'm an Express server.");
});