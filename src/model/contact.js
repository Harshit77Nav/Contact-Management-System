const mongoose = require("mongoose");

const contSch = mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    email:{type:String,unique:true},
    phone:{type:String,unique:true}
})

const Cmodel = mongoose.model("contacts",contSch);

module.exports = Cmodel;