const passport = require("passport");
const express = require("express");
const UserDao = require("./dao/user_dao");
const favoriteAnime = require("./use_cases/add_remove_favorite_anime");
const ani_ex = require("./exceptionHandlers");

module.exports = (app) => {
    var URL_PREFIX = "/api";
    var router = createRouter();
    app.use(URL_PREFIX, router);
    ani_ex.init(app);
};

function createRouter() {
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
        UserDao.find()
            .then(result => res.json({ users: result }));
    })

    router.get("/users/:user_id", (req, res, next) => {
        UserDao.findById(req.params.user_id)
            .then(user => {
                if (user == null){
                    throw new ani_ex.ResourceNotFoundError(`user ${req.params.user_id} does not exist`);
                }
                res.json(user);
            })
            .catch(err=>{
                next(err);
            });
    })

    router.get(`/users/:user_id/like/:anime_id`, (req, res, next) => {
        favoriteAnime.like(req.params.user_id, req.params.anime_id)
            .then(result => res.json(result))
            .catch(err => {
                next(err);
            })
    })

    router.get(`/users/:user_id/unlike/:anime_id`, (req, res, next) => {
        favoriteAnime.unlike(req.params.user_id, req.params.anime_id)
            .then(result => res.json(result))
            .catch(err => {
                next(err);
            })
    })

    return router;
}