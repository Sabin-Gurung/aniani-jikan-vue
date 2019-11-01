const passport = require("passport");
const express = require("express");
const router = express.Router();

router.get("/hello", (req, res)=>{
    res.json({"message" : "hello there"});
})

router.get("/auth/google", passport.authenticate('google', {
    scope : ['profile']
}))

router.get("/auth/google/callback", passport.authenticate('google'), (req, res)=>{
    res.redirect("/api/auth/current_user");
})

router.get("/auth/current_user", (req, res)=>{
    if (req.user)
        res.send(req.user);
    else
        res.send("hehe");
})

router.get("/auth/logout", (req, res)=>{
    req.logOut();
    res.redirect("/");
})

module.exports = router;