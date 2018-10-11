var db=require('../dbconnection');
var empTask={

        getEmpDetailsById:function(id,callback){
            db.query("select * from employee_tbl where emp_id=?",[id],callback);
        }
}

module.exports=empTask;