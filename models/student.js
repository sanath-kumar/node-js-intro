const mongoose = require('mongoose')

const {Schema} = mongoose;

const studentSchema = new Schema({
    name : String,
    rollNo : String
})

module.exports = mongoose.model("student",studentSchema)

