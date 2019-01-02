var db=require('../dbconnection');
var job={

        getjobBycompany:function(item,callback){
            db.query("select r.company_name,r.rec_photo,j.job_title,j.posted_date,j.skill_req,j.salary_min,j.salary_max from job_tbl j,recruiter_tbl r where r.company_name=j.fk_company_name",callback);
        },
        getjobdetails:function(callback){
            db.query("select r.company_name,j.* from job_tbl j,recruiter_tbl r ",callback);
        }
}

module.exports=job;