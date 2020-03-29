#!/usr/bin/env node

// https://github.com/motdotla/dotenv  David Gleba
require('dotenv').config()


var pg = require('pg');
var PostgresCouchDB = require('../lib');


//Note there is an error in the simple example which i have not tracked down/fixed
//yet  -- it will not restart the stream from where it left off if the feeder is stopped
//
//Mike Said.. I am working on the daemon.js in same direcory as this which restarts happily.
//


//
//   Start settings..
//

// secrets from from .env file 
var jev_couchurl = process.env.ev_couchurl;
var jev_couchdb = process.env.ev_couchdb;

var jev_pgurl = process.env.ev_pgurl;
var jev_pgtable = process.env.ev_pgtable;


var settings = 
      {
        couchdb: {
         // example  - url: 'https://usera:pasw@couch.dg.jgleba.com/',
         url: jev_couchurl,
         // couch database
         database: jev_couchdb,
         // pgtable
         pgtable:  jev_pgtable
       }
      };

// https://stackoverflow.com/questions/3582552/postgresql-connection-url
// pgclient = new pg.Client("postgres://postgres:pgpassw@localhost:5433/postgres");
// example - pgclient = new pg.Client("postgres://postgres:pgpassw@10.4.1.227:5433/postgres");
//
pgclient = new pg.Client( jev_pgurl );


//
//  END settings.
//


// David Gleba ref. https://www.sitepoint.com/delay-sleep-pause-wait/ 
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
    // This gave an error:  setTimeout(Function.prototype, 500);
  } while (currentDate - date < milliseconds);
}
// test sleep
console.log("prep.start.test.sleep8000.458");
sleep(8000);
console.log("after sleep 8000 458");
// end. ref. https://www.sitepoint.com/delay-sleep-pause-wait/ 


console.log("sleeping 30 sec. a");
sleep(30123);

pgclient.connect(function(err) {
            if (err) {
                if(err.code == 'ECONNREFUSED'){ //try to catch here but i dont think works
                        console.error('ERROR: Connection to postgres refused', err);
                }else{
                        console.error('ERROR: Could not connect to postgres', err);
                }
                process.exit();
            } else {
                console.log('Connected to postgres');
            }
        }) ;

console.log("sleeping 15 sec. b");
sleep(15123);

initial_since = get_initial_since(settings.couchdb.pgtable);

// console.log("sleeping 15 sec. c");
// sleep(15123);

createImporter();


function createImporter(){
    settings.since = initial_since;
    var importer = new PostgresCouchDB(pgclient,  settings );
    
      importer.start();

    //enable what event you want to watch
    importer.events.on('connect', console.log);
    importer.events.on('checkpoint', console.log);
    importer.events.on('checkpoint.error', function(msg, err) {
        console.error(msg, err);
	process.exit(1);
    });

    //importer.events.on('change', console.log);  //very noisy
    importer.events.on('change.error', function(feed, change, err) {
	console.error(feed, err.body, err);
    });

    importer.events.on('error', function(msg, err) { console.error(msg, err); });

    //importer.events.on('drain', console.log);

    importer.events.on('stop', function(key) {
    	console.log(key + ': stopped');
    });

}



function get_initial_since(feedname) {
    var sql = '';
                sql = "SELECT since FROM since_checkpoints WHERE pgtable='" + feedname + "' AND enabled=True";
                pgclient.query(sql, function(err, result) {
                    if (err) {
                        console.error(feedname + ": Could not get pgtables and checkpoints with: " + sql, err);
                        process.exit();
                    } else {
                        if (result.rows.length > 0) {
                            console.log(feedname + ': initial since=' + result.rows[0].since);
                            initial_since = result.rows[0].since;
                        } else {
                            sql = "INSERT INTO since_checkpoints ";
                            sql += "(pgtable, since, enabled) VALUES ";
                            sql += "('" + feedname + "', 0, True)";
                            pgclient.query(sql, function(err, result) {
                                if (err) {
                                    console.error(feedname + ': Unable to insert row "' + feedname + '"into table', sql, err);
                                    process.exit();
                                } else {
                                    console.log(feedname + ': Added to since_checkpoint table');
                                    initial_since = 0;
                                }
                            });
                        }
                    }
                });
   
}

