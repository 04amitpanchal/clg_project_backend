var admin=require('../model/visitor_page');
var express=require('express');
var route=express.Router();



route.get('/',function(req,res,next){
    admin.getAllCompanyField(function(err,rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports=route;