
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

to move project to other server.

 - check .env files in each folder as needed. root and couch-to-postgres
 - setup postgres as needed.  follow couch2postgres instructions. see docker/postgres/init/pginit.sh
 - check couchdb docker.ini file. copy .../docs/docker/couchdb/docker.ini.example.in2 in as starter.
 - npm install in in each folder as needed.  couch-to-postgres
 - setup couch as needed. curl system tables like _user. 

Postgres:

line 244 in: C:\n\Dropbox\csd\0-csd\vuepouch\listo429notes\couchtopostgres\read-notes-couchdb-to-postgres,know.txt
C:\n\Dropbox\csd\0-csd\vuepouch\listo429notes\couchtopostgres\couchtopostgres,pgcouch,setupdb-2019-03-06-listotbl-192.168.88.60_5433-Adminer.jpg
NOT - listo db .  Use notice  DB: postgres Schema: public 
I used adminer, go to postgres public and past table creation sql from pginit.sh.


Couch:

curl -X PUT http://127.0.0.1:6212/_users
curl -X PUT http://127.0.0.1:6212/_replicator
curl -X PUT http://127.0.0.1:6212/_global_changes

curl -X PUT http://user:pass@127.0.0.1:6212/_users
curl -X PUT http://user:pass@127.0.0.1:6212/_replicator
curl -X PUT http://user:pass@127.0.0.1:6212/_global_changes



2019-03-02


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



no need to create db..


https://user:p@couch.dg.jgleba.com/opennote

http://user:p@192.168.88.42:6212/listo429c2db

http://user:c@192.168.88.42:6212/listo429cdb


https://user:c@couch.davidg.ml/listo429c2db



----------------------------------------------------
Title:  .
-----------------------2018-12-03[Dec-Mon]23-04PM

couchdb password reset..

another way is putting plain text in .ini file and it hashes it on startup.

create user: create doc in _users db

{
    "_id": "org.couchdb.user:dbreader",
    "name": "dbreader",
    "type": "user",
    "roles": [],
    "password": "plaintext_password"
}


{
    "_id": "org.couchdb.user:cua",
    "name": "cua",
    "type": "user",
    "roles": ["ruser"],
    "password": "x"
}

it hashes the password on saving.


----------------------------------------------------


http://192.168.88.42:3001/f435/


----------------------------------------------------
Title:  .
-----------------------2018-12-14[Dec-Fri]07-15AM

docker-compose stop postgres429 adminer429

docker-compose up postgres429 adminer429

docker rm  listo429c_postgres429_1
docker rmi postgres 

rm datasys/postgres429   # so init can run. If init was done, it will not redo it.


http://192.168.88.42:8089/?pgsql=postgres429&username=postgres


----------------------------------------------------


----------------------------------------------------
Title:  .
-----------------------2018-12-14[Dec-Fri]12-35PM


docker-compose up my429 adminer429 
docker-compose up  adminer429  my429



 docker rm listo429c_my429_1 listo429c_adminer429_1

http://192.168.88.42:8089/?server=my429&username=muser


http://192.168.88.42:8089/?server=my429&username=muser

mb:
pw x


----------------------------------------------------

----------------------------------------------------
Title:  .
-----------------------2018-12-23[Dec-Sun]10-53AM

docker logs -f  listo429c_pgcouch429_1

docker-compose restart pgcouch429


docker-compose restart   listo429c

docker logs -f  listo429c_listo429c_1



----------------------------------------------------



----------------------------------------------------
Title:  .
-----------------------2019-01-01[Jan-Tue]21-57PM

changes:

- add js confirm to delete to avoid data loss.

Click on a list menu and then click on another list. sometimes it deleted the second list.

- change sync retry to true.


- add code to update js files in 10top.js


----------------------------------------------------


----------------------------------------------------
Title:  .
-----------------------2019-01-12[Jan-Sat]23-07PM

http://192.168.88.42:6211/tutorial/step1-compo/



----------------------------------------------------


----------------------------------------------------
Title:  .
-----------------------2019-01-17[Jan-Thu]06-58AM


2019-02-04_Mon_13.51-PM

to update js file in client browsers, change the name in the `dist` folder by incrementing the number and edit the index.html to use that file.

----------------------------------------------------


----------------------------------------------------
Title:  .
-----------------------2019-03-06[Mar-Wed]13-27PM

sqlpad query

see this file and others in the folder.

C:\n\Dropbox\csd\0-csd\vuepouch\listo429notes\couchtopostgres\sqlpad,postgres,query-SQLPad - Connections.jpg

----------------------------------------------------
