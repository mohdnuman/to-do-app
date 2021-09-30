const Task=require('../models/task');


module.exports.home=function(req,res){
    Task.find({},function(err,tasklist){
        if(err){
            console.log("error occurred while fetching");
            return;
        }
        return res.render('home',{
            tasks:tasklist
        });
    });
    
}

// const db=require('../config/mongoose');

module.exports.add=function(req,res){

    Task.create({
        description:req.body.description,
        category:req.body.category,
        duedate:req.body.duedate
    },function(err,newTask){
        if(err){
            console.log("error occurred while creating new task");
            return;
        }
        console.log('********',newTask);
        return res.redirect('back');
    });
}

module.exports.delete=function(req,res){
    // console.log(req.query.id);
    // return res.end("<h1>hello</h1>");
    Task.findByIdAndDelete(req.query.id,function(err){
        if(err){
            console.log("error occurred while deleting");
            return;
        }
        return res.redirect('back');
    })
}