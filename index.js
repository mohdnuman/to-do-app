const express=require('express');
const port=8000;
const app=express();


app.use(express.urlencoded());
app.use('/',require('./routes/index.js'));


app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('./static'));

const db=require('./config/mongoose');

app.listen(port,function(err){
    if(err)
    {
        console.log("error occurred while starting the server");
        return ;
    }
    console.log(`express server is up and running on port:${port}`);
})