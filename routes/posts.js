const express = require('express');
const router = express.Router();
const Post = require("../model/Post")

router.get('/',(req,res)=>{
    res.send("working.....");
})
router.get('/test',async(req,res)=>{
    try{
        const posts = await Post.find();
        res.json(posts);

    }
    catch{
        (err)

    }
})
router.post('/', async(req,res)=>{
    const post = new Post({
        title:req.body.title,
        description:req.body.description
      

    });
    try{
    post.save().then((data)=>{
        res.json(data)
    })
    }
    catch(err){
        res.json({message:err})
    }
   
})
module.exports=router;