const express=require('express');
const cors=require('cors');
const body_parser=require('body-parser');

const PORT = 3000;

const app = express();
app.use(body_parser.json());
app.use(cors());

app.get('/', function(req,res){
    res.send("hello from server")
});

app.post('/enroll', function(req,res){
    console.log(req.body);
    res.status(200).send({"message":"data recieved"});
});

app.listen(PORT, function(){
    console.log("server running on localhost:"+ PORT)
});



