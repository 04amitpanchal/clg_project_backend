var admin=require('../model/response');
var express=require('express');
var route=express.Router();



// route.post('/',function(req,res,next){
//     admin.addEducation(req.body,function(err,rows){
//         if (err) {
//             res.json(err);
//         } else {
//             res.json(rows);
//         }
//     });
// });



route.put('/:id',function(req,res,next){
    admin.updateResponse(req.body,req.params.id,function(err,rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});


route.get('/',function(req,res,next){
    admin.getAllResponse(function(err,rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports=route;