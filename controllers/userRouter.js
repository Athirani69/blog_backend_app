const express = require("express")

const userRoute=express.Router()
const usrMdl=require("../models/usermodel")

userRoute.post("/add",async(req,res)=>{
    let data=req.body
    let usrobj=new usrMdl(data)
    let result=await usrobj.save()
    res.json({
        status:"success"
    })
})




module.exports=userRoute;