var db=require('../dbconnection');
var company_details={

        similarJob:function(item,callback){
            return db.query("select * from job_tbl where job_title=?",[item.job_title],callback);
        },
        
        
        // getAllDetails:function(callback){
        //         return db.query("select * from apply_tbl ",callback);
        // },
        // getByidDetails:function(id,callback){
        //         return db.query("select * from apply_tbl where apply_id=? ",[id],callback);
        // },
        // getByidforupdateDetails:function(id,callback){
        //         return db.query("select * from apply_tbl where apply_id=? ",[id],callback);
        // },
        // removeapply(item,callback){
        //         var delArr=[];
        //         for(i=0;i<item.length;i++){
        //             delArr[i]=item[i].apply_id;
        //         }
        //         return db.query("delete from apply_tbl where apply_id in (?)",[delArr],callback);
        // },
        // addApply:function(item,callback){
            
        //     return  db.query("insert into apply_tbl (fk_emp_id,fk_job_id,apply_date) values(?,?,?)",
        //     [item.fk_emp_id,item.fk_job_id,item.apply_date],
        //     callback);
        // },
        // updateApply:function(item,callback){
        //         console.log(item.apply_date);
        //         return db.query('update apply_tbl set fk_emp_id=?,fk_job_id=?,apply_date=? where apply_id=?',
        //         [item.fk_emp_id,item.fk_job_id,item.apply_date,item.apply_id],
        //         callback);
        //  },
    

        

}

module.exports=company_details;