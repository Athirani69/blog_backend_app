const express = require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const app=express()
const userRoute=require("./controllers/userRouter")
const postRoutr=require("./controllers/postrouter")

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Athirani26:athirani69@cluster0.w4km12l.mongodb.net/UserblogDb?retryWrites=true&w=majority", 
{
  useNewUrlParser:true
}
)


app.use("/api/user",userRoute)
app.use("/api/post",postRoutr)


app.listen(3001,()=>{
    console.log("running")

})