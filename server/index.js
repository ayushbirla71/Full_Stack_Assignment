const express=require('express')
const route=require("./routers/route")
const app=express()

app.use(express.json())

const cors=require("cors");
// const corsOptions ={
//    origin:'*', 
//    credentials:true,            
//    optionSuccessStatus:200,
// }

app.use(cors())


app.use('/',route)

app.listen(process.env.PORT||3001,()=>{console.log("Express app running on PORT", 3001||process.env.PORT)})