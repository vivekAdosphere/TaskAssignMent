/* --> xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx <---

File Name : app.js
File Description : This file is entry point of the app and it contains contains

---> Required Dependencies <---
Installed Dependencies : 
1) express (npm install express)

User Defined Dependencies : 
1) config.js ("./config/config")
2) router.js ("./webRoutes/router")

---> Function Definitions <---

--> xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx---xxx <--- */

// Dependencies
const express = require("express");
const config = require("./configuration/config");
const { webRouter } = require("./webRoutes/router");

// Local config variables
const portNumber = config.PORT;

// Defining express app
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));
app.use(express.json());

// Setting view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// Setting up web routes
webRouter(app);

// Listening App
app.listen(portNumber, () => {
    console.log(`Raw bot is running on port : ${portNumber}`)
})