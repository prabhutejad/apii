const express = require('express');
const router = express.Router();
const Post = require("../model/Post")

router.get('/',(req,res)=>{
    res.send("working.....");
})
router.get('/test',(req,res)=>{
    res.send("testing api.....")
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