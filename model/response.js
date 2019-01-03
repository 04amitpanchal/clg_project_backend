var db=require('../dbconnection');
var response={

        // addEducation:function(item,callback){
        //     return db.query('insert into education_tbl values(?,?,?,?,?,?,?,?)',
        //     ["",item.fk_emp_id, item.emp_qual, item.emp_pass_year, item.emp_uni, item.emp_exp, item.emp_skill1, item.emp_skill2],
        //     callback);
        // },

        

        // deleteEducation:function(item,callback){
        //     return db.query('delete from education_tbl where fk_emp_id=?',
        //     [item.fk_emp_id],
        //     callback);
        // },

        updateResponse:function(item,callback){
            return db.query('update response_tbl set res_status=?,res_desc=? where res_id=?',
            [item.res_status,item.res_desc,item.res_id],
            callback);
        },

        getAllResponse:function(callback){
            return db.query("select * from response_tbl",callback);
        }

}

module.exports=response;







