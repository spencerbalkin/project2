const dotenv = require('dotenv').config();
const express = require("express");
const methodOverride = require('method-override');
const app = express();
const entryRouter =
require("./resources/entries");
const path = require('path');

//Configure EJS
app.set("view engine", "ejs");

//Configure methodOverride
app.use(methodOverride('_method'));

//Body parser to accept POST Body
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("./public"));

//define variable to link jquery and materializeCSS
const dir = {
  public: path.join(__dirname, 'public'),
  jquery: path.join(__dirname, 'node_modules/jquery/dist'),
  materialize: path.join(__dirname, 'node_modules/materialize-css/dist'),
};

//link jquerys/materializeCSS
app.use(express.static(dir.public));
app.use('/vendor/jquery', express.static(dir.jquery));
app.use('/vendor/materialize', express.static(dir.materialize));


// ROUTES
app.use('/', entryRouter);

//Configure Express to serve static assets out of the "public" folder
//gets CSS and JS to frontend

//Insert all of our routes into the middleware of the app
// When I tried this and there was nothing in resources it crashed. Put in resources and try again.
// app.use(require("./resources"));

app.listen(process.env.PORT || 3000, () => {
    console.log("Server started!");
});
