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
     

    // const hashedPassword=await hashPasswordGenerator(pass)
    // data.pass=hashedPassword
    // let user=new usrMdl(data)
    // let result=await user.save()
    // res.json({
    //     status:"success"
    // })



    userRoute.post("/signin",async(req,res)=>{
          let input=req.body
          let email=req.body.email
          let data=await usrMdl.findOne({"email":email})
          if(!data)
          {
            return res.json({
                status:"invalid user"
            })
          }
          console.log(data)
          let dbPassword=data.pass
          let inputPassword=req.body.pass
          console.log(dbPassword)
          console.log(inputPassword)
          const match=await bcrypt.compare(inputPassword,dbPassword)
          {
            if(!match)
            {
                return res.json({
                    status:"invalid password"
                })
            }
          }
          res.json({
            status:"suscfuly login"
          })

    })

    
    

    //let data=req.body
    
    




module.exports=userRoute;