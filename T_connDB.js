var sql = require('mssql');

var dbconfig = {
  server: "localhost",
  user: "sa",
  password: "otrogato",
  database: "EXAMPLE",
  port: 1433,
  options: {
    encrypt: false
  }
};

function getList(){
  var conn = new sql.ConnectionPool(dbconfig);
  conn.connect(function(err){
    if(err){
        console.log(err);
    }
    var req = new sql.Request(conn);
    req.query("SELECT [TEMPERATURE] FROM [EXAMPLE].[dbo].[MAIN]",function(err,recordset){
      if(err){
        console.log(err);
      }
      else{
        console.log(recordset);
      }
        
      conn.close();
    });
  });
}

getList();