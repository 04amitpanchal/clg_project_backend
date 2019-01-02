var db=require('../dbconnection');
var ad={

    getrecDetailsById:function(id,callback){
        console.log(id);
        db.query("select * from recruiter_tbl where rec_id=?",[id],callback);
    },
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
    Addrec:function(item,filename,callback){
       return db.query('insert into recruiter_tbl values(?,?,?,?,?,?,?) ',
        [item.rec_id,item.password,item.company_name,item.company_web,item.adderess,item.company_type,filename],callback);
    },
    updaterec:function(item,filename,callback){
        return db.query('update recruiter_tbl set password=?,company_name=?,company_web=? ,adderess=?,company_type=?,rec_photo=?  where rec_id=?',
        [item.password,item.company_name,item.company_web,item.adderess,item.company_type,filename,item.rec_id],
        callback);
    },
    updateEmpDetails:function(item,filename,callback){
        return db.query('update employee_tbl set emp_password=?,first_name=?,last_name=?,country=?,state=?,city=?,emp_field=?,emp_photo=? where emp_id=?',
        [item.emp_password,item.first_name,item.last_name,item.country,item.state,item.city,item.emp_field,filename,item.emp_id],callback
    );
    },
    AddEmp:function(item,filename,callback){
        return db.query('insert into employee_tbl values(?,?,?,?,?,?,?,?,?)',  
        [item.emp_id,item.emp_password,item.first_name,item.last_name,item.country,item.state,item.city,item.emp_field,filename],callback
    );
    }

  


}

module.exports=ad;