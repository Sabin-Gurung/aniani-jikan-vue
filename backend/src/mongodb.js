
const mongoose = require("mongoose");

module.exports.init = (uri)=>{
    mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
    mongoose.connection.once('open', () => { console.log("Mongo db connection success") });
}

