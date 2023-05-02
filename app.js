// Require the Express npm Package
const express = require("express");

// Express App
// Creating our server named app
const app = express();

// Make everything inside public available

app.use(express.static("public"));

// Creating a 'GET' Route
app.get("/home", (request, response, next) => {
  // response.send('<h1>Hello, World!</h1>')
  response.sendFile(__dirname + "/views/home-page.html");
});

// Create a Second Route

app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/views/about.html");
});

// Create a Third Route

app.get("/works", (request, response) => {
  response.sendFile(__dirname + "/views/works.html");
});

// Create a Forth Route

app.get("/photo_gallery", (request, response) => {
  response.sendFile(__dirname + "/views/photo_gallery.html");
});

// Start the Server
app.listen(3000, () => console.log("App is listening on PORT 3000")); // 3000 - it's the port (door to the server)
