const mongoose=require("mongoose")

const usrSchema=new mongoose.Schema(
    {
        name:String,
        age:String,
        mob:String,
        adrs:String,
        pincode:String,
        email:String,
        pass:String

    }
)

module.exports=mongoose.model("user",usrSchema)