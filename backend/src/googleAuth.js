const passportGoogleStrategy = require("passport-google-oauth20").Strategy;

function init(passport) {
    passport.use(
        new passportGoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: "/api/auth/google/callback",
            },
            (accessToken, refreshToken, profile, done) => {
                done(null, { id : profile.id});
            })
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((userid, done) => {
        done(null, { id: userid, name: "custome amn" })
    });
}

module.exports.init = init;