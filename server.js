var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
var passport = require("passport");
var session = require("express-session");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

// Body Parser
app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Passport
app.use(session( { secret: 'cwru', resave: true, saveUninitialized:true } ));
app.use(passport.initialize());
app.use(passport.session());  //persistent login

// Handlebars
app.engine("handlebars", exphbs({defaultLayout: "main" }));
app.set("view engine", "handlebars");

// app.get("/", function(req, res) {
//   res.send("welcome to Passport with Sequelize");
// });

//Models
var models = require("./models");

// Routes
var authRoute = require("./routes/auth.js")(app, passport);

// Passport Strategy
require("./config/passport/passport.js")(passport, models.User);

//Sync Database
models.sequelize.sync({force: true}).then(function() {
  console.log('Nice! Database looks fine')
}).catch(function(err) { 
  console.log(err, "Something went wrong with the Database Update!")
});


app.listen(PORT, function(err) {
  if (!err) {
    console.log("App listening on port: " + PORT);
  } else { console.log(err); }
});
 
