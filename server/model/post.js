const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title:{
        type: String,
    },
    creator:{
        type: String,
    },
    message:{
        type: String,
    },
    tags: [String],
    likeCount:{
        type:Number,
        default: 0
    },
    selectedFile:{
        type:String
    },
    createdAt:{
        type: Date,
        default: new Date(),
    }

});

const Post = mongoose.model('Post', postSchema);

module.exports = Post; 