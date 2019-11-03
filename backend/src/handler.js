const passport = require("passport");
const express = require("express");

module.exports = (app)=>{
    var URL_PREFIX = "/api";
    var router = createRouter();
    app.use(URL_PREFIX, router);
};

function createRouter(){
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

    router.get("/users", (req, res) => {
        res.json({message: "get list of users not implemented"});
    })

    router.get("/users/:user_id", (req, res) => {
        res.json({message: `get user ${req.params.user_id} not implemented`});
    })

    router.put("/users", (req, res) => {
        res.json({message: "modify users not implemented", body : req.body});
    })

    router.get(`/users/:user_id/favorites/add/:fav_id`, (req, res) => {
        res.json({message: `add one favorites of id ${req.params.fav_id} to user ${req.params.user_id} not implemented`});
    })

    return router;
}