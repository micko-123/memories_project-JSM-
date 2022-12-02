const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    user:{
        type: String,
    },
    text:{
        type: String,
    },
    date:{
        type: Date,
        default: new Date(),
    }

});

const Post = mongoose.model(Post, 'postSchema');

module.exports = Post;