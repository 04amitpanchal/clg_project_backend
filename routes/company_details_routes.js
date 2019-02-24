var userobj=require('../model/company_details');
var express=require('express');
var route=express.Router();



route.post('/',function(req,res,next){
    userobj.similarJob(req.body,function(err,rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports=route;