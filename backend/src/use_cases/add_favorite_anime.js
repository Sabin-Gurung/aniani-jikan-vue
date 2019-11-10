
var UserDao = require("../dao/user_dao");
var getUserByGoogleId = require("./add_new_user").getUserByGoogleId;
const ani_ex = require("../exceptionHandlers");
const jikanClient = require("../services/jikanClient");

async function getAnime(animeId){
    var anime = await jikanClient.getAnime(animeId);
    if (anime == null){
        throw new ani_ex.ResourceNotFoundError(`anime ${animeId} does not exist`);
    }
    return anime;
}

async function execute(userId, animeId){
    await getAnime(animeId);

    var user = await getUserByGoogleId(userId);
    if (user== null){
        throw new ani_ex.ResourceNotFoundError(`user ${userId} does not exist`);
    }

    if (user.favorites.indexOf(animeId) >= 0)
        return user;
    user.favorites.push(animeId);
    var user = await user.save();
    return user;
}

module.exports = {
    execute
}