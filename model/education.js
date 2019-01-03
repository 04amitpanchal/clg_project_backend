var db=require('../dbconnection');
var education={

        addEducation:function(item,callback){
            return db.query('insert into education_tbl values(?,?,?,?,?,?,?,?)',
            ["",item.fk_emp_id, item.emp_qual, item.emp_pass_year, item.emp_uni, item.emp_exp, item.emp_skill1, item.emp_skill2],
            callback);
        },

        updateEducation:function(item,callback){
            return db.query('alter table education_tbl modify edu_id(11) unsigned autoincrement',
            [item.emp_qual, item.emp_pass_year, item.emp_uni, item.emp_exp, item.emp_skill1, item.emp_skill2,item.fk_emp_id],
            callback);
        },

        deleteEducation:function(item,callback){
            return db.query('delete from education_tbl where fk_emp_id=?',
            [item.fk_emp_id],
            callback);
        },

        getAllEducation:function(callback){
            return db.query("select * from education_tbl",callback);
        }

}

module.exports=education;


//'update education_tbl set emp_qual=?,emp_pass_year=?,emp_uni=?,emp_skill1=?,emp_skill2=? where fk_emp_id = ?


