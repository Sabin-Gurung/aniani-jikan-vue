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
                console.log(accessToken);
                done(null, profile);
                // if (userslist.includes(profile.id))
                //     done(null, profile.id)
                // userslist.push(profile.id);
                // done(null, profile.id);
            })
    );

    // passport.serializeUser((user, done) => {
    //     done(null, user.id)
    // });

    // passport.deserializeUser((user, done) => {
    //     done(null, { id: user, name: "custome amn" })
    // });

}

module.exports.init = init;