const express=require("express")
const postModel=require("../models/postmodel")

const rout=express.Router()

rout.post("/add",async(req,res)=>{
    let data=req.body
    let post=new postModel(data)
    let result=await post.save()
    res.json({
        status:"success"
    })
})

rout.get("/view",async(req,res)=>{
    let result=await postModel.find()
    res.json(result)
})

module.exports=rout