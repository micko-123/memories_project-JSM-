// third party modules
const express = require('express')
const dotenv =require('dotenv').config()
const cors = require('cors')

// custom modules
const connectDB = require('./config/db')
const postRouter = require('./router/posts')


const port = process.env.PORT || 5000

const app = express()

// connect to database
connectDB() 


app.use('/post', postRouter)



app.listen(port, ()=>{
    console.log(`server is running at ${port}`)
} )
