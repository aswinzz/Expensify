const express = require('express');
const path = require('path');

const app = express();

const public = path.join(__dirname,'..','public') 

app.use(express.static(public));

app.get('*',(req,res)=>{
    res.sendFile(path.join(public,'index.html'));
});

app.listen(3000,() =>{
    console.log('Server is up');
});