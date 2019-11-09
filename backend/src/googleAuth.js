const passportGoogleStrategy = require("passport-google-oauth20").Strategy;
const addNewUser = require("./use_cases/add_new_user")

function init(passport) {
    passport.use(
        new passportGoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: "/api/auth/google/callback"
            },
            (accessToken, refreshToken, profile, done) => {
                var userBody = {googleid : profile.id, username : profile.displayName};
                addNewUser.addUser(userBody)
                .then(res => done(null, {id : res.id}));
            })
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((userid, done) => {
        done(null, { id: userid})
    });
}

module.exports = init;