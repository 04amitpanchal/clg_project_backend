var db=require('../dbconnection');
var ad={

    getAllRec:function(callback){
        return db.query("select *  from recruiter_tbl",callback);
    },
    getAllEmp:function(callback){
        return db.query("select * from employee_tbl",callback);
    },
    removeRec(item,callback){
        var delArr=[];
        for(i=0;i<item.length;i++){
            delArr[i]=item[i].rec_id;
        }
        return db.query("delete from recruiter_tbl where rec_id in (?)",[delArr],callback);
    },
    removeEmp(item,callback){
        var delArr=[];
        for(i=0;i<item.length;i++){
            delArr[i]=item[i].emp_id;
        }
        return db.query("delete from employee_tbl where emp_id in (?)",[delArr],callback);
    },
    addRecruiter:function(item,callback){
        return db.query('insert into recruiter_tbl values(?,?,?,?,?,?,?) ',
        [item.rec_id,item.password,item.company_name,item.company_web,item.adderess,item.company_type,item.rec_photo],callback);
    },
    updateRecruiter:function(item,id,callback){
        return db.query('update recruiter_tbl set password=?,company_name=?,company_web=? ,adderess=?,company_type=?,rec_photo=?  where rec_id=?',
        [item.password,item.company_name,item.company_web,item.adderess,item.company_type,item.rec_photo,id],
        callback);
    }


}

module.exports=ad;