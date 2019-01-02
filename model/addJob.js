var db=require('../dbconnection');
var job={

        addJob:function(item,callback){
            return db.query('insert into job_tbl values(?,?,?,?,?,?,?,?)',
            [item.fk_rec_id,item.job_title,item.posted_date,item.skill_req,item.job_desc,item.salary_min,item.salary_max,item.fk_company_name],
            callback);
        },

}

module.exports=job;