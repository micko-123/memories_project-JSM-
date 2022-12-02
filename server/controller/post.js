const asyncHandler = require('express-async-handler')

const Post = require('../model/post')

const getPost = asyncHandler ( async (req, res)=>{
    const posts = await Post.find()

    res.status(200).json({
        status: 'succes',
        data:posts
    })
 }
)
const createPost= asyncHandler ( async(req, res)=>{
    // const post = await Post.create({
    //     title:req.body.title,
    //     creator:req.body.creator,
    //     message:req.body.message,
    //     tags:req.body.tags,
    //     selectedFile:req.body.selectedFile
    // })
    // res.status(200).json({
    //     status:'succes',
    //     data: post
    // })
  }
)
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