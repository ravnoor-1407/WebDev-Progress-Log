// EJS (Embedded JavaScript Templates)
// EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.
// It allows you to embed JavaScript code within your HTML templates, making it easy to create dynamic web pages.
// EJS is often used in conjunction with Express.js to render views on the server side.

const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

// 1. Setting the view engine to EJS
app.set("view engine", "ejs");
// When we run server outside of the views folder, we need to set the views directory explicitly. By default, Express looks for views in a folder named "views" in the root directory of the application. 
// If your EJS templates are located in a different folder, you can specify the path to that folder.
// Setting the directory where the EJS templates are located
app.set("views", path.join(__dirname, "/views"));

// 2. Serving static files (CSS, JS, Images, etc.)
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));

// 3. Rendering an EJS template
app.get("/", (req, res) => {
    console.log("GET request received for the Home Page:", req.method, req.originalUrl);
    res.render("home.ejs");
});

// 4. Rendering another EJS template for the About page
app.get("/about", (req, res) => {
    console.log("GET request received for the About Page:", req.method, req.originalUrl);
    res.render("about.ejs");
});

// 5. Passing data to EJS templates (Conditional Statements also discussed in ejs file)
app.get("/rolldice", (req, res) => {
    let diceRoll = Math.floor(Math.random() * 6) + 1; // Data to be passed to the EJS template
    console.log("GET request received for the Roll Dice Page:", req.method, req.originalUrl);
    res.render("rolldice.ejs", { message: "Welcome to the Roll Dice page!", diceRoll });
});

// 6. Instagram EJS Template Activity (Loops also discussed in ejs file)
app.get("/ig/:username", (req, res) => {
    const followers = ["adam", "bob", "charlie", "david", "eve"];
    let { username } = req.params;
    res.render("instagram.ejs", { username, followers });
    console.log(`GET request received for Instagram page of user: ${username}`);
});

// 7. Facebook EJS Template Activity (Database provided to fetch data)
app.get("/fb/:username", (req, res) => {
    let { username } = req.params;
    const facebookData = require("./data.json");
    if (facebookData[username]) {
        res.render("facebook.ejs", { data: facebookData[username] });
        console.log(`GET request received for Facebook page of user: ${username}`);
    } else {
        res.render("fbError.ejs")
        console.log(`No data found for user: ${username}`);    
    }
    console.log(`GET request received for Facebook page of user: ${username}`);
});

// 8. Starting the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});