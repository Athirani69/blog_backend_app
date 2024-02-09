const express = require("express")

const userRoute=express.Router()
const usrMdl=require("../models/usermodel")
const bcrypt=require("bcryptjs")

hashPasswordGenerator=async(password)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(password,salt)
}


userRoute.post("/add",async(req,res)=>{

    let{data}={"data":req.body}
    let pass=req.body.pass
    hashPasswordGenerator(pass).then(
        (hashedPassword)=>{
            console.log(hashedPassword)
            data.pass=hashedPassword
            console.log(data)
            let usrobj=new usrMdl(data)
            let result=usrobj.save()
            res.json({
                status:"success"
            })
        })
        }
    )
    

    //let data=req.body
    
    




module.exports=userRoute;