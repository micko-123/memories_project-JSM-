const express = require('express')
const asyncHandler = require('express-async-handler')

const getPost = (req, res)=>{
    res.send('<h1>get post</h1>')
}

const createPost= (req, res)=>{
    res.send('<h1>create post</h1>')
}

const updatePost =  (req, res)=>{
    res.send('<h1>update post</h1>')
}

const deletePost = (req, res)=>{
    res.send('<h1>delete post</h1>')
}

module.exports = {
    getPost,
    createPost,
    updatePost,
    deletePost
}