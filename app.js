const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const { busesmodel } = require("./models/bus")


const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://suhan:suhan2109@cluster0.iuizdnx.mongodb.net/busDB?retryWrites=true&w=majority&appName=Cluster0")
app.post("/add",(req,respo)=>{
    let input=req.body
    let  bus=new busesmodel(input)
    bus.save(
        respo.save(
            respo.json({status:"succes"})
        )
    )
})
app.post("/search",(req,respo)=>{
    let input=req.body
    coursesmodel.find(input).then(
        (data)=>{
            respo.json(data)
        }
    ).catch()
})
app.post("/delete",(req,respo)=>{
    let input=req.body
    coursesmodel.findByIdAndDelete(input._id).then(
        (response)=>{
            respo.json({"status":"success"})
        }
    ).catch(
        (error)=>{
            respo.json({"status":"error"})
        }
    )
})

app.get("/view",(req,respo)=>{
    coursesmodel.find().then(
        (data)=>{
            respo.json(data)
        }
    ).catch()
})
app.listen(8080,()=>{
    console.log("serverstarted")
})