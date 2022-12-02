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
    const post = await Post.create({
        title:req.body.title,
        creator:req.body.creator,
        message:req.body.message,
        tags:req.body.tags,
        selectedFile:req.body.selectedFile
    })
    res.status(200).json({
        status:'succes',
        data: post
    })
  }
)
const updatePost = asyncHandler( async(req, res)=>{
    
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
        runValidators: true
      } )

    res.status(201).json({
        status: 'succes',
        data: updatedPost
    })
  } 
)
const deletePost =asyncHandler( async (req, res)=>{
    // await Post.findByIdAndDelete(req.params.id)

    // res.status(200).json({
    //     status:'succes',
    //     message:'post succesfully deleted'
    // })
 }
)

const likePost = asyncHandler( async (req, res) => {
    // const likedPost = await Post.findByIdAndUpdate(req.params.id, { likeCount: likeCount + 1})
})
module.exports = {
    getPost,
    createPost,
    updatePost,
    deletePost,
    likePost
}