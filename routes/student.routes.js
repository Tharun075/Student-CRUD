const express = require('express')
const Student = require('../models/student.model')

const StudentRouter = express.Router()

StudentRouter.get("/getAll", async(req ,res)=>{
    try{
        const data = await Student.find()

        res.status(201).json({msg:"Fetch all Students SUCCESS!", data})
    }
    catch(err){
        res.status(500).json({msg:"Internal server error: route=> {getAll}", err})
    }
})

StudentRouter.post("/createStudent", async(req,res)=>{
    const { name, rollNo} = req.body

    if(!name || !rollNo){
        res.status(403).json({msg:"Invalid credentials passed!"})
    }
    try{
        
        const newStudent = new Student({
            name:name,
            rollNo:rollNo,
        })

        await newStudent.save()
        res.status(201).json({msg:"Student created successfully!", newStudent})
    }
    catch(err){
        res.status(500).json({msg:"Internal server error: route=> {createStudent}", err})
        
    }
})

StudentRouter.delete("/deleteStudent/:id", async(req ,res)=>{
    const { id } = req.params

    if(!id){
        res.status(404).json({msg:"No such id!"})
    }
    try{
        const deleteStudent = await Student.findByIdAndDelete(id)
        res.status(200).json({msg:"Student deleted successfully", deleteStudent})
    }
    catch(err){
        res.status(500).json({msg:"Server error: ",err})
    }
})

StudentRouter.put("/updateStudent/:id", async(req ,res)=>{
    const {id } = req.params
    const {name,rollNo} = req.body

    try{
        const updateStudent = await Student.findByIdAndUpdate(id, {name,rollNo},{ new:true})
        res.status(200).json({msg:"Student update Success!", updateStudent})
    }
    catch(err){
        res.status(500).json({msg:"Server error" , err})
    }
})

module.exports = StudentRouter