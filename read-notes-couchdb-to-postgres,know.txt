
works.

----------------------------------------------------
Title:  .
-----------------------2018-11-22[Nov-Thu]14-49PM

https://github.com/sysadminmike/couch-to-postgres


git clone https://github.com/sysadminmike/couch-to-postgres.git


---


## test pg connection


  eg:
  docker exec -it yiialkalmi_postgres_1 psql -U project -W project project

  https://stackoverflow.com/questions/37099564/docker-how-can-run-the-psql-command-in-the-postgres-container

  no
  docker exec -it 421dkrpostgres_postgres_1 psql -U postgres -W pg postgres

  yes
  docker exec -it 421dkrpostgres_postgres_1 psql -U postgres 


---
  
## Ref

  
https://stackoverflow.com/questions/3582552/postgresql-connection-url

https://hackernoon.com/how-to-use-environment-variables-keep-your-secret-keys-safe-secure-8b1a7877d69c




----------------------------------------------------
Title:  .
-----------------------2018-12-12[Dec-Wed]16-25PM


https://nodesource.com/blog/containerizing-node-js-applications-with-docker/


FROM node:10
WORKDIR /dapp

COPY . .
RUN npm install --production

CMD [“node”, “index.js”]



https://github.com/nodejs/docker-node/issues/533


docker-compose.yml

version: "2"
services:
  node:
    image: "node:8"
    user: "node"
    working_dir: /home/node/app
    environment:
      - NODE_ENV=production
    volumes:
      - ./:/home/node/app
    expose:
      - "8081"
    command: "npm start"

package.json
{
  "name": "app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "npm install && node node_modules/.bin/http-server -p 8081"
  },
  "author": "",
  "license": "MIT",
  "dependencies": {
    "angular": "^1.6.6",
    "http-server": "^0.10.0"
  }
}


----------------------------------------------------


docker-compose up pgcouch429

docker-compose stop_pgcouch429


docker rm -f listo429c_pgcouch429_1



Cannot start service pgcouch429: 
OCI runtime create failed: 
container_linux.go:348: 
starting container process caused "exec: \".\": executable file not found in $PATH": unknown



----------------------------------------------------

----------------------------------------------------
Title:  .

 Instructions from Mike
          
-----------------------2018-11-22[Nov-Thu]14-50PM


search for --  Example setup   - its half way down


# Example setup and postgres configuration

git clone https://github.com/sysadminmike/couch-to-postgres.git pgcouch

cd pgcouch

npm install 

## Edit ./bin/index.js to suite your settings:

var settings =
      {
        couchdb: {
         url: 'http://192.168.3.21:5984',
         pgtable:  'example',
         database: 'example'
       }
      };

 pgclient = new pg.Client("postgres://mike@localhost/pgdatabase");
 
 
## Before starting it up create the since_checkpoints table

CREATE TABLE since_checkpoints
(
  pgtable text NOT NULL,
  since numeric DEFAULT 0,
  enabled boolean DEFAULT false, --not used in the simple client example
  CONSTRAINT since_checkpoint_pkey PRIMARY KEY (pgtable)
)


This table is used to store the checkpoint for the database(s) being synced something akin to the couchdb _replicator database.

## Create the table to store the couch docs:

CREATE TABLE opennotetbl
(
  id text NOT NULL,
  doc jsonb,
  CONSTRAINT opennotetbl_pkey PRIMARY KEY (id)
)


CREATE TABLE example
(
  id text NOT NULL,
  doc jsonb,
  CONSTRAINT example_pkey PRIMARY KEY (id)
)


## Start watching changes


source .env; ./bin/index.js


It will add a record to the since_checkpoints table and begin syncing.

At this point you can now perform SELECT queries the docs within postgres as in the above example. This should be fine to use against a production couchdb as it makes no changes to and is performing the same tasks as the elastic search river plugin. With a bit of copy/pasting it is possible to use sql to create simple scripts or one liners to run in a shell with curl.

Also take a look at /bin/daemon.js and https://github.com/sysadminmike/couch-to-postgres/blob/master/daemon-README.md


----------------------------------------------------



----------------------------------------------------
Title:  .
-----------------------2018-11-22[Nov-Thu]16-26PM

select * from opennotetbl ORDER BY doc->'dgupdated' desc; 



https://stackoverflow.com/questions/39945308/how-to-get-a-json-object-as-column-in-postgresql

select 
       doc -> 'dgupdated' as dgupdated,
       doc -> 'title' as title,
       doc -> 'note' as note
from opennotetbl
WHERE doc ->> 'dgupdated' is not null  -- need ->> operator to make it text
ORDER BY doc->'dgupdated' desc;


getting error..
    is type reserved??
       doc -> 'type' as tp


       
example..
       
select name, description, id, 
       data ->> 'tax' as tax,
       data ->> 'other_attribute' as other_attribute
from core;



----------------------------------------------------
