var db=require('../dbconnection');
var Login={

    loginVerify:function(item,callback){
        return db.query("select rec_id,password from recruiter_tbl where rec_id=? and password=?",
        [item.rec_id,item.password],callback);
    }
    
}

module.exports=Login;