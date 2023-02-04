// server.js File

const express = require('express'); // Importing express module
  
const app = express(); // Creating an express object
  
const port = 8000;  // Setting an port for this application
var cors = require('cors')

const mongoose=require('mongoose');
require("dotenv/config");
const bodyParser = require("body-parser");

app.use(bodyParser.json())

mongoose.connect(process.env.DB_CONNECTION,()=>{
    console.log("connected")
}); 

//Middle Ware
const postRoute = require('./routes/posts');
app.use('/post',postRoute);

const corsOptions ={
    origin:'https://apiss.onrender.com/post', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

  
// Starting server using listen function
app.listen(port, function (err) {
   if(err){
       console.log("Error while starting server");
   }
   else{
       console.log("Server has been started at "+port);
   }
})

app.get('/', function (req, res) {
    res.send('we are at the root route of our server');
  })