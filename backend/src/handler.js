const passport = require("passport");
const express = require("express");
const router = express.Router();

router.get("/hello", (req, res)=>{
    res.json({"message" : "hello there"});
})

router.get("/auth/google", passport.authenticate('google', {
    scope : ['profile', 'email']
}))

router.get("/auth/google/callback", (req, res)=>{
    res.send("Hello this is callback");
})

router.get("/auth/logout", (req, res)=>{
    // logout
})

module.exports = router;