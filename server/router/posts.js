const express = require('express')
const asyncHandler = require('express-async-handler')

const {
    getPost,
    createPost,
    updatePost,
    deletePost,
    likePost
} = require('../controller/post')

const router = express.Router()

router.get('/', getPost)

router.post('/', createPost)

router.put('/:id',updatePost)

router.delete('/:id', deletePost)

router.put('/like/:id', likePost)

module.exports = router