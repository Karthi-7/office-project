const userService=require("../service/service")
const findAll=async(req,res)=>{
    try{
        const response=await userService.findAllDetails()
        return res.json({
            message:"data fetched succefully",
            code:200,
            data:response
        })
    }
    catch(err){
        console.log(err)
    }
    }


    const createUser=async(req,res)=>{
        try{
            const response=await userService.createData(req);
            return res.json({
                message:"profile uploaded succesfullly",
                code:201,
                data:response
            })
        }
        catch(err){
            console.log(err)
        }
        }


module.exports={
    createUser,findAll
}