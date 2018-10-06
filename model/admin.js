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
    }


}

module.exports=ad;