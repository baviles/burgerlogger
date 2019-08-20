
var express = require("express");
var bodyParser = require ("body-parser");
var methodOverride = require ("method-override");

var PORT = process.env.PORT || 4321;


var app = express();
app.use(express.static(__dirname + "/public"));

app.use (bodyParser.urlencoded({ extended: false}));

var exphbs = require ("express-handlebars");
app.engine("handlebars", exphbs ({ defaultLayout: "main"}));
app.set("view engine", "handlebars");



var routes = require ("./controllers/burgers_controoler.js");
app.use("/",routes);

app.listen(PORT, function(){
    console.log("App now listening at localhost" + PORT);
});



