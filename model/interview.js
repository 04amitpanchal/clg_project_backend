var db=require('../dbconnection');
var interview={

        getAllInterviewDetails:function(callback){
                return db.query("select * from  interview_dtl",callback);
        }
        

}

module.exports=interview;