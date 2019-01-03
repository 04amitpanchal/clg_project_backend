var db=require('../dbconnection');
var applyJob={

        getAllDetails:function(callback){
                return db.query("select * from apply_tbl ",callback);
        }
        

}

module.exports=applyJob;