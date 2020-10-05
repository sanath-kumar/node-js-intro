const express = require('express')
const student = require('../models/student')

const router = express.Router()

router.get("/student",async function(req,res){
    let data = await student.find()
    res.send(data)
})

router.get("/student/details", async function(req,res){
    // let id = "5f7963891ee55601f86dcdd6"
    let data = await student.findOne({_id : req.query.id})
    res.send(data)
})

router.post('/student',async function(req,res){
    var name = req.body.name
    var rollNo = req.body.rollNo

    let _student = new student({
        "name" : req.body.name,
        "rollNo" : req.body.rollNo
    })
    
    let data = await _student.save()
    res.send(data) 
})


module.exports = router