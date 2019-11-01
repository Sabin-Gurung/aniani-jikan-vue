const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookie = require("cookie-parser");
const expSession = require("express-session");

dotenv.config();

const app = express();

app.use(morgan("short"));
app.use(express.static(path.join(__dirname, 'client/dist')));
app.use(express.urlencoded({extended:false}));
app.use(cookie());
app.use(expSession({
    secret : process.env.SESSION_KEY,
    resave : true,
    saveUninitialized : true
}));

app.use("/api", require("./backend/src/handler"));

app.get('*', (req, res)=>{
    res.sendfile(path.join(__dirname, 'client/dist/index.html'));
});

const port = process.env.PORT || 3500;
app.listen(port);