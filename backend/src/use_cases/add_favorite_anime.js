
var UserDao = require("../dao/user_dao");
var getUserByGoogleId = require("./add_new_user").getUserByGoogleId;
const ani_ex = require("../exceptionHandlers");

async function execute(userId, animeId){
    // animeexist
    if (animeId == -1){
        throw new ani_ex.ResourceNotFoundError(`anime ${animeId} does not exist`);
    }

    // user exist
    var user = await getUserByGoogleId(userId);
    if (user== null){
        throw new ani_ex.ResourceNotFoundError(`user ${userId} does not exist`);
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