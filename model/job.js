var db=require('../dbconnection');
var job={

        getjobBycompany:function(item,callback){
            db.query("select r.company_name,r.rec_photo,j.job_title,j.posted_date,j.skill_req,j.salary_min,j.salary_max from job_tbl j,recruiter_tbl r where r.company_name=j.fk_company_name",callback);
        },
        getjobdetails:function(callback){
            db.query("select r.company_name,j.* from job_tbl j,recruiter_tbl r ",callback);
        },
        removeJob(item,callback){
        var delArr=[];
        for(i=0;i<item.length;i++){
            delArr[i]=item[i].job_id;
        }
        return db.query("delete from job_tbl where job_id in (?)",[delArr],callback);
    },
}

module.exports=job;