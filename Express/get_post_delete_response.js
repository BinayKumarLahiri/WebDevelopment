const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('index.html'));//express.static is a middleware used to serve some some files with security

app.get('/',(req,res)=>{
    console.log("It's a get Request");
    res.send("Server Listtening...");
})

app.get('/index',(req,res)=>{
    console.log("Serving index.html");
    res.sendFile('/template/index.html',{root:__dirname});//res.sendfile('file_address',{root: <rootaddress>}) is used to serve any file when there is a get request on the specified end, __dirname defines the root directory of the project for the relative file path of the files served using the res.sendFile() method
})

//app.post listens to a post request to the given end returns a response accordingly
app.post('/',(req,res)=>{
    console.log("Post Request....");
    res.send("This is Post Request");
})

//app.listen(port,callback) is the method which initialises the server to listen at the given port
app.listen(port,()=>{
    console.log("Server Running at Port : ",port);
})