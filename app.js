const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookie = require("cookie-parser");
const expSession = require("express-session");
const passport = require("passport");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(morgan("short"));
app.use(express.urlencoded({extended:false}));
app.use(cookie());
app.use(expSession({
    secret : process.env.SESSION_KEY,
    resave : true,
    saveUninitialized : true
}));

require("./backend/src/mongodb").init(process.env.MONGO_ATLAS_URI);

app.use(passport.initialize());
app.use(passport.session());
require("./backend/src/googleAuth")(passport);

require("./backend/src/handler")(app);

if (process.env.ENV == "PROD"){
    app.use(express.static(path.join(__dirname, 'client/dist')));
    app.get('*', (req, res)=>{
        res.sendfile(path.join(__dirname, 'client/dist/index.html'));
    });
}

module.exports = app;