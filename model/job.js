var db=require('../dbconnection');
var job={

        getjobBycompany:function(item,callback){
            db.query("select r.company_name,r.rec_photo,j.job_title,j.posted_date,j.skill_req,j.salary_min,j.salary_max from job_tbl j,recruiter_tbl r where r.company_name=j.fk_company_name",callback);
        },
        getjobdetails:function(callback){
            db.query("select * from job_tbl ",callback);
        },
        getjobbyId:function(id,callback){
            db.query("select * from job_tbl where job_id=?",[id],callback);
        }, removeJob(item,callback){
            var delArr=[];
            for(i=0;i<item.length;i++){
                delArr[i]=item[i].job_id;
            }
            return db.query("delete from job_tbl where job_id in (?)",[delArr],callback);
        },
        addJob:function(item,callback){
            var date=item.posted_date;
            return  db.query("insert into job_tbl(fk_rec_id,job_title,posted_date,skill_req,job_desc,salary_min,salary_max,fk_company_name) values(?,?,?,?,?,?,?,?)",
            [item.fk_rec_id,item.job_title,date,item.skill_req,item.job_desc,item.salary_min,item.salary_max,item.fk_company_name],
            callback);
        } ,updateJob:function(item,callback){
            console.log(item.job_id);
            return db.query('update job_tbl set fk_rec_id=?,job_title=?,posted_date=?,skill_req=?,job_desc=?,salary_min=?,salary_max=?,fk_company_name=? where job_id=?',
            [item.fk_rec_id,item.job_title,item.posted_date,item.skill_req,item.job_desc,item.salary_min,item.salary_max,item.fk_company_name,item.job_id],
            callback);
     }

      
      
    
}

module.exports=job;