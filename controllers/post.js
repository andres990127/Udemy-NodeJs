const Post = require('../models/post');

const getPosts = (req,res) => {
    res.json({
        posts: [{title: "First Post"},{title: "Second Post"}]
    });
};

const createPost = (req,res) => {
    const post = new Post(req.body);
    post.save((err,result) => {
        res.status(200).json({
            post: result
        })
    })
};

module.exports = {
    getPosts,
    createPost
};