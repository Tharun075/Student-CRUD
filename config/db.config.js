const mongoose = require('mongoose')
require('dotenv').config()

const connectToDB = async()=>{
    try{
        const MONGO_URL = process.env.MONGO_URL

        await mongoose.connect(MONGO_URL)
        console.log("DB CONNECTED!")
    }
    catch(err){
        console.error("ERROR CONNECTING TO MONGO", err)
    }
}

module.exports = connectToDB