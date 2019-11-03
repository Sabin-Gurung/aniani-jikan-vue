
const mongoose = require("mongoose");

var UserSchema = mongoose.Schema({
    googleid : {type : Number},
    username : {type : String}
});

UserSchema.pre("save", function(done){
});

var UserDao = mongoose.model("Novel", novelSchema);
module.exports = UserDao;