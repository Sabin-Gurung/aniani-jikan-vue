const passport = require("passport");
const express = require("express");
const router = express.Router();

router.get("/hello", (req, res) => {
    res.json({ "message": "hello there" });
})

router.get("/auth/google", passport.authenticate('google', {
    scope: ['profile'],
    prompt: "select_account"
}))

router.get("/auth/google/callback", passport.authenticate('google'), (req, res) => {
    if (process.env.ENV == "PROD") {
        res.redirect("/");
    }
    else {
        res.redirect("http://localhost:8080/");
    }
})

router.get("/auth/current_user", (req, res) => {
    if (req.user)
        res.send(req.user);
    else
        res.send({ id: -1 });
})

router.get("/auth/logout", (req, res) => {
    req.logOut();
    res.redirect("/");
})

module.exports = router;