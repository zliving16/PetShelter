const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');

const CakesSchema= new mongoose.Schema({
    name:{type: String, required:true, minlength:3,maxlength:255,error:"must be more than three characters", unique:true},
    type:{type:String,required:true, minlength:3,error:"must be more than three characters" },
    description:{type:String,required:true, minlength:3,error:"must be more than three characters" },
    skills:{
        skillOne:{type:String},
        skillTwo:{type:String},
        skillThree:{type:String}  
    },
    likes:{type:Number,default:0}
}, { timestamps: true });
const Cakes = mongoose.model('Cakes', CakesSchema);

module.exports =Cakes;