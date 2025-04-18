const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name:{type:String, required: true , unique:true},
    rollNo:{type: Number, required:true , unique:true}
})

const Student = mongoose.model("Student", studentSchema)

module.exports = Student