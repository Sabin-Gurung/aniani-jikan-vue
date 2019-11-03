
const mongoose = require("mongoose");
const uri = process.env.MONGO_ATLAS_URI;

module.exports.init = ()=>{
    mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
    mongoose.connection.once('open', () => { console.log("Mongo db connection success") });
}

