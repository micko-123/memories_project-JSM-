const express = require('express')
const asyncHandler = require('express-async-handler')

const router = express.Router()

router.get('/', (req, res)=>{
    res.send('<h1>get post</h1>')
})

router.post('/', (req, res)=>{
    res.send('<h1>create post</h1>')
})

router.put('/:id', (req, res)=>{
    res.send('<h1>update post</h1>')
})

router.delete('/:id', (req, res)=>{
    res.send('<h1>delete post</h1>')
})

module.exports = router