
var UserDao = require("../dao/user_dao");
var getUserByGoogleId = require("./add_new_user").getUserByGoogleId;

async function execute(userId, animeId){
    // animeexist

    // user exist
    var user = await getUserByGoogleId(userId);
    if (user== null){
        return {message : `user ${userId} doesnot exist`};
    }
    // find and save
    if (user.favorites.indexOf(animeId) >= 0)
        return user;
    user.favorites.push(animeId);
    var user = await user.save();
    return user;
}

module.exports = {
    execute
}