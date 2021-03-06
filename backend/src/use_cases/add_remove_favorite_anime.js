const ani_ex = require("../exceptionHandlers");
const jikanClient = require("../services/jikanClient");
const UserDao = require("../dao/user_dao");

async function getAnime(animeId){
    var anime = await jikanClient.getAnime(animeId);
    if (anime == null){
        throw new ani_ex.ResourceNotFoundError(`anime ${animeId} does not exist`);
    }
    return anime;
}

async function like(userId, animeId){
    await getAnime(animeId);

    var user = await UserDao.findById(userId);
    if (user== null){
        throw new ani_ex.ResourceNotFoundError(`user ${userId} does not exist`);
    }

    if (user.favorites.includes(animeId))
        return user;
    user.favorites.push(animeId);
    var user = await user.save();
    return user;
}

async function unlike(userId, animeId){
    await getAnime(animeId);

    var user = await UserDao.findById(userId);
    if (user== null){
        throw new ani_ex.ResourceNotFoundError(`user ${userId} does not exist`);
    }

    if (!user.favorites.includes(animeId))
        return user;
    user.favorites = user.favorites.filter(val => val!=animeId);
    var user = await user.save();
    return user;
}

module.exports = {
    like,
    unlike,
    getAnime
}