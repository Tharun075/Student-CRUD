const express = require('express')
const StudentRouter = require('./routes/student.routes')
const connectToDB = require('./config/db.config')
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

app.use(express.json())
//Test ROUTE!!
app.get("/test", (req ,res)=>{
    res.status(200).json({msg:"This is a test Route!"})
})

// CRUD ROUTES!!
app.use("/student", StudentRouter)

connectToDB()
app.listen(PORT, ()=>{
    console.log(`Server started on http://localhost:${PORT}`)
})
