
# Title:  Start up instructions.



## Quick-Start installation - The plan

The idea is to use example files below as is. They have settings including usernames and simple passwords. 
The system should start using these example settings. 
Read the example files to see the passwords and settings needed to login and access urls.


## Requirements.

    - linux system with docker-ce 18 and docker compose installed (I use ubuntu)
    - node installed. npm installed. (I use nvm to install node ver 8 or 10)


```
git clone https://github.com/dgleba/listo429c.git
cd listo429c

```


## Delete data (because I had set it up previously. This will start clean.)

```
     sudo rm -rf ../datasys/couch429c/
     sudo rm -rf ../datasys/postgres421/
     sudo rm -rf ../datasys/postgres429/
     sudo rm -rf ../datasys/sqlpad429/

```


 - root .env file - copy from .env.example to .env

 - cp ./docs/docker/couchdb/docker.ini.example.in2  ./docker/couchdb/docker.ini

 - cp docker-compose.example.yml  docker-compose.yml


 ```
 docker-compose up couchdb
 
 ```


## Setup couchdb system db's

Note.. Edit local Ip-address to match your system. 

```
curl -X PUT http://cuser:abc@192.168.88.58:6212/_users
curl -X PUT http://cuser:abc@192.168.88.58:6212/_replicator
curl -X PUT http://cuser:abc@192.168.88.58:6212/_global_changes

```



visit:    http://192.168.88.58:6212/_utils

It should require user and password.


`docker-compose up  vpv445gb`

visit:    http://192.168.88.58:6216


`docker-compose up postgres429`

```
cd couch-to-postgres
npm install

```

```
docker-compose up adminer429  pgadmin

```

## Postgres:

    NOT - listodb.  
    Use:  DB: postgres Schema: public 
    I used adminer, go to postgres public and paste sql commands for table creation from docker/postgres/init/pginit.sh

    Todo: pginit.sh should run on first startup, but it's not working. Fix it.

    Picture shows working setup..
    ../docs/couchtopostgres,pgcouch,setupdb-listotbl-192.168.88.60_5433-Adminer.jpg



`docker-compose up pgcouch429`


### Got this error.

    pgcouch429_1   | post445gtbl: Could not get pgtables and checkpoints with: SELECT since FROM since_checkpoints WHERE pgtable='post445gtbl' AND enabled=True { error: relation "since_checkpoints" does not exist
    pgcouch429_1   | Error 42P01:post445gtbl in change
    pgcouch429_1   | post445gtbl: stopping stream
    pgcouch429_1   | post445gtbl: stopped


Solution: restart pgcouch429. OK now.




-----------------------2019-03-06[Mar-Wed]13-27PM

`docker-compose up sqlpad`

sign up to Create your own account.

## sqlpad settings

see this file and others in the folder.

./docs/sqlpad,postgres,query-SQLPad-Connections.jpg

_____________


sqlpad settings.

      192.168.88.58
      5433
      db postgres
      user postgres

    http://192.168.88.58:6152/
    dgleba@gmail.com
    pas,mr

_____________



Query.

    select 
          doc -> 'title' as title,
          doc -> 'body' as body,
          doc -> 'statusfld' as statusfld,
          doc -> '_id' as _id
    from post445gtbl
    WHERE doc ->> 'rtype' is not null  -- need ->> operator to make it text
    ORDER BY doc->>'_id' desc;

Query.

    select 
          doc -> 'title' as title,
          doc -> 'body' as body,
          doc -> 'statusfld' as statusfld,
          doc -> '_id' as _id,
          doc -> 'rtype' as rectype
          --  doc -> 'name' as name
    from post445gtbl
    WHERE doc ->> 'rtype' = 'mlist'  -- need ->> operator to make it text
    ORDER BY doc->>'_id' desc;


Example query:

    select 
          doc -> 'list' as list,
          doc -> 'title' as title,
          doc -> 'updatedAt' as updatedat
    from listotbl
    WHERE doc ->> 'title' is not null  -- need ->> operator to make it text
    ORDER BY doc->'updatedAt' desc;

_____________


docker-compose restart pgcouch429


## Restart

I find that it helps to restart the system after initially setting up and getting it running.

`docker-compose restart`



----------------------------------------------------

# Https, SSL, TLS

Up to now, we have been accessing urls in the/your local network. 

To enable HTTPS, edit docker-compose.yml.
The labels: stanzas should have valid registered domain names, valid email, etc.
Edit the examples provided.

then

`docker-compose up caddy-gen`

This will make the system available to the outside internet.



----------------------------------------------------


