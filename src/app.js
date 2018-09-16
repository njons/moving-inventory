// this is where the server and router goes?
// ----------
// EXPRESS.JS
// ----------
// require the express module
const express = require("express");
// create express app
const app = express();

// require path module to serve static files
const path = require("path");
// require body parser to handle incoming data (parse data)
const bodyParser = require("body-parser");
// require compression module
const compression = require("compression");
// require cookie-parser to read cookies
const cookieParser = require("cookie-parser");
// tell express where to finde the controllers folder
const controllers = require("./controllers/index");

// ----------
// HANDLEBARS.JS
// ----------

// require express handlebars
const exphbs = require("express-handlebars");

// set handlebars
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

//set up a handlebars engine and tell it where to look for the views files
app.engine(
  "hbs",
  exphbs({
    extname: "hbs",
    // tell handlebars where the layouts can be found
    layoutsDir: path.join(__dirname, "views", "layouts"),
    // tell handlebars where the partials can be found
    partialsDir: path.join(__dirname, "views", "partials"),
    // tell it that views > layouts > main.hbs is the default
    defaultLayout: "main"
  })
);

// this is for using session and cookies, which I missed
// app.use(
//   session({
//     key: "user_sid",
//     secret: "somerandonstuffs",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       expires: 600000
//     }
//   })
// );

// use compression middleware to compress response bodies
app.use(compression());
// use body-parser middleware to parse the URL
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "public")));
// applying middleware
app.use(cookieParser());

//ERROR HANDLING
// // create a 404 middleware sending the '404.html' file
// app.use((req, res) => {
//   res.status(404).sendFile(path.join(__dirname, '..', 'public', '404.html'));
// });
//
// // create a 500 middleware sending the '500.html' file
// app.use((err, req, res, next) => {
//   res.status(500).sendFile(path.join(__dirname, '..', 'public', '500.html'));
// });

// tell app to use controllers for handling routes
// (controllers > index.js | explains what will happen at each endpoint)
app.use(controllers);

// ----------
// SERVER
// ----------

// set dynamic port for the server
app.set("port", process.env.PORT || 3000);
// create server using port variable
app.listen(app.get("port"), () => {
  console.log(`App running on port ${app.get("port")}`);
});
