var pool = require('../DbConnection/dbConnection');
var sql = require('mssql');

module.exports = function(ProfileID,callback){

  var q = 'Select * from Profile';
  var request = new sql.Request(pool);
 request.query(q, function(err, rows) {
  console.log("coming inside Db function");
     if(err){
         console.log("err in db function",err)
         let response = {
             "status" : "fail",
             "Reason" : "DbIssue",
             "ErrorMessage" : err.toString()
         }
         if(callback){
             callback(response);
         }
     }
     else{
             let response = {
             "status" : "success",
             "DbData": rows.recordsets
         }
          if(callback){
             console.log('response');
             callback(response);
         }
     }


  })
};
