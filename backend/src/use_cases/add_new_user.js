const UserDao = require("../dao/user_dao");


async function getUserByGoogleId(googleid){
    return await UserDao.findOne({googleid});
}

async function addUser(userBody){
    var user = await getUserByGoogleId(userBody.googleid);
    if (user != null)
        return user;
    var newUser = new UserDao(userBody);
    return await newUser.save();
}

module.exports = {
    getUserByGoogleId,
    addUser
}


