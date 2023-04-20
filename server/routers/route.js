const express = require('express')
const router = express.Router()
const {getCurrency, getConvert} = require('../controllers/Controller')


router.get("/test-me",function(req,res){
    res.send("This is the test Api!!!!!!!!!!!!!!")
})

//-------------------- apis ------------------//
router.get('/currency-exchange', getCurrency)
router.get('/convert', getConvert)


//------------------------ error ----------------//
router.all('/*',(req,res)=>{return res.status(400).send({status:false, message:"pls provide valid path"})})


module.exports = router