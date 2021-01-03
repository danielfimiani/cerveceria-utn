"use strict";
var logger = require("morgan");
// requires
const express = require("express");
const bodyparser = require("body-parser");
var exphbs = require("express-handlebars");
var session = require("express-session");

require("dotenv").config();

// ejecutar express
const app = express();

//fichero de rutas
const indexRouter = require("./routes/indexRoutes");

// Middlewares
app.use(logger("dev"));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
const LIFE_TIME = 1000 * 60 * 60 * 2;
app.use(
  session({
    name: "sid",
    secret: "UTN",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, //Only if 'production' ,
      sameSite: true,
      maxAge: LIFE_TIME,
    },
  })
);

//Helpers
var hbs = exphbs.create({
  // Specify helpers which are only registered on this instance.
  helpers: {
    ifCond: function (v1, operator, v2, options) {
      switch (operator) {
        case "==":
          return v1 == v2 ? options.fn(this) : options.inverse(this);
        case "===":
          return v1 === v2 ? options.fn(this) : options.inverse(this);
        case "!=":
          return v1 != v2 ? options.fn(this) : options.inverse(this);
        case "!==":
          return v1 !== v2 ? options.fn(this) : options.inverse(this);
        case "<":
          return v1 < v2 ? options.fn(this) : options.inverse(this);
        case "<=":
          return v1 <= v2 ? options.fn(this) : options.inverse(this);
        case ">":
          return v1 > v2 ? options.fn(this) : options.inverse(this);
        case ">=":
          return v1 >= v2 ? options.fn(this) : options.inverse(this);
        case "&&":
          return v1 && v2 ? options.fn(this) : options.inverse(this);
        case "||":
          return v1 || v2 ? options.fn(this) : options.inverse(this);
        default:
          return options.inverse(this);
      }
    },
  },
});

//Render Engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//Statics bundles
app.use(express.static("./public/common"));
app.use(express.static("./public/images"));
app.use(express.static("./public/js"));
app.use(express.static("./public/fonts"));
app.use(express.static("./views/styles"));

//ROUTER
app.use("/", indexRouter);

//PORT
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on  http://localhost:${port}`);
});
