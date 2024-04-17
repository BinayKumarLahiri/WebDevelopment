const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send("<h1>Hello World in Express</h1>");
})

app.get('/about',(req,res)=>{
    res.send("<h1>About Page in Express</h1>");
})

app.get('/blog',(req,res)=>{
    res.send("<h1>Blog Page in Express</h1>");
})

app.get('/Service',(req,res)=>{
    res.send("<h1>Service Page in Express</h1>");
})

//We can use the code above to serve every end but this is not recommeneded since there can be multiple ends so to do this efficiently we can use url parameters
app.get('/:slug',(req,res)=>{
    res.send(`This is ${req.params.slug}`);
    console.log(req);
})

//Url Query: in the link below login is the url parameter and mode=black is the query we can add a query using ?<Query_list>
/* <Query_List> is a list of key-value pair */
// http://localhost:3000/login?mode=black


app.listen(port,()=>{
    console.log(`Example app Listening at port ${port}`);
})