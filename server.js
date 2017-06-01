const express = require("express");
const app = express();

//Configure EJS
app.set("view engine", "ejs");

//Body parser to accept POST Body
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Configure Express to serve static assets out of the "public" folder
//gets CSS and JS to frontend
app.use(express.static("./public"));

//Insert all of our routes into the middleware of the app
// When I tried this and there was nothing in resources it crashed. Put in resources and try again. 
// app.use(require("./resources"));

app.listen(process.env.PORT || 3000, () => {
    console.log("Server started!");
});
