const express=require('express');
const port=8000;
const app=express();

app.listen(port,function(err){
    if(err)
    {
        console.log("error occurred while starting the server");
        return ;
    }
    console.log(`express server is up and running on port:${port}`);
})