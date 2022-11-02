const mongoose=require("mongoose");
const userData=new mongoose.Schema({
    id:{type:Number},
    name:{type:String},
    email:{type:String},
    phoneNumber:{type:String},
    image:{type:String}
})

module.exports=mongoose.model("UserDetail",userData);

