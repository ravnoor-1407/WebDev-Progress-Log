const express = require('express');
const app = express();
const port = 8080;

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));
// Middleware to parse JSON data
app.use(express.json());

// If we don't use the middleware, we won't be able to access the data sent in the request body for POST requests.
// It shows undefined if we don't use the middleware.

app.get('/register', (req, res) => {
    let {username, password} = req.query;
    res.send(`Registration form submitted via GET request for user: ${username}` );
});

app.post('/register', (req, res) => {
    let {username, password} = req.body;
    res.send(`Registration form submitted via POST request for user: ${username}`);
});

app.listen(port, () => {
  console.log(`Server is listening to port: ${port}`);
});