var http = require('http') ;
var pg   = require('pg'  ) ;

var connectionString = 'postgres://tester:tester@localhost:5432/tasksapp' ;


var client = new pg.Client(connectionString) ;
client.connect();

var get_AllListsForUser = function( user_id ) {
  return new Promise( (resolve, reject) => {
    var query = client.query( 
      "select * from clst where id_PEOP_owner=$1", [user_id]
    );   
    var result = [];
    query.on('row', (row) => {
      result.push(row) ;
    });
    query.on('end' , ()=> {
      resolve( result ) ;
    });
  });
};

var get_AllTodosForList = function( list_id ) {
  return new Promise( ( resolve, reject) => {
    var query = client.query( 
      "select * from todo where id_clst=$1", [list_id]
    );   
    var result = [];
    query.on('row', (row) => {
      result.push(row) ;
    });
    query.on('end' , ()=> {
      resolve( result ) ;
    });
  });
};

