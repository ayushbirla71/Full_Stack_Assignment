const express = require('express');
const serverless = require("serverless-http");
const route = require('../routers/route')
const app = express()
const cors=require("cors");

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}

app.use(express.json())

app.use(cors(corsOptions))

// app.use('/',route)
app.use(`/.netlify/functions/api`, route);


app.use((req, res) => {
   return res.status(404).send({ status: false, message: "Url not found" })
})


// app.listen(process.env.PORT ||3003,function ()
// {console.log("Express app is running on port "+(process.env.PORT ||3003))})

module.exports = app;
module.exports.handler = serverless(app);