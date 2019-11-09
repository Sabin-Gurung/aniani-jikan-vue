
const mongoose = require("mongoose");

var UserSchema = mongoose.Schema({
    googleid : {type : Number, unique : true},
    username : {type : String},
    favorites : {type : [String]}
});

UserSchema.pre("save", function(done){
    done();
});

var UserDao = mongoose.model("users", UserSchema);
module.exports = UserDao;