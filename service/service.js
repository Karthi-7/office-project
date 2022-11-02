const UserData=require("../model/user.model");

const createData=async(req,res)=>{
    try{
        const response=UserData.create({name:req.body.name,
            email:req.body.email,
            phoneNumber:req.body.phoneNumber,
            image:req.file.filename})
            return response
    }
    catch(err){
        console.log(err)
    }
   
}
module.exports={
    createData
}