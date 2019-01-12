var db=require('../dbconnection');
var empAppliedJobs={

        getAllEmpAppliedJobs:function(id,callback){
                return db.query('select j.job_id,j.fk_rec_id,j.job_title,j.fk_company_name,a.fk_emp_id,a.fk_job_id,a.apply_date,e.emp_id,e.first_name,e.last_name,e.emp_photo from job_tbl j,apply_tbl a,employee_tbl e where j.job_id=a.fk_job_id and a.fk_emp_id=? and e.emp_id=?',[id,id],callback);
        }
        

}

module.exports=empAppliedJobs;