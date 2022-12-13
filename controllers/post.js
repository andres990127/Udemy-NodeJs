const Post = require('../models/post');

const getPosts = (req,res) => {
    Post.find().select("_id title body")
    .then((posts)=>{
        res.status(200).json({
            post: posts
        })
    })
    .catch(err => console.error(err));
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