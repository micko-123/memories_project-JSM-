const express = require('express')
const dotenv =require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT || 5000

const app = express()



app.listen(port, ()=>{
    console.log(`server is running at ${port}`)
} )