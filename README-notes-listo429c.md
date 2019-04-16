---

Title: .
-----------------------2019-04-14[Apr-Sun]21-35PM

# http://a.davidg.ml:46272

# http://c.davidg.ml:46272/_utils/

# http://couch429c.david462.tk:46272/_utils/

---

cd /srv/dkr/listo429c
docker-compose stop caddy-gen
sleep 14
sudo chmod -R 775 caddy-gen/certs
docker rm -f $(docker ps -a |    grep caddy       | awk '{print $1}')
docker images | grep caddy | awk '{print $1 ":" $2}' | xargs docker rmi
dkps
docker-compose up caddy-gen

---

Title: .
-----------------------2019-03-28[Mar-Thu]16-13PM

# Restart after new vpv445g build

docker-compose stop vpv445gb
sleep 3
docker-compose up vpv445gb
dkps

# Restart couch-to-postgres if it's not working

### look at logs..

docker-compose up pgcouch429

### stop and start

docker-compose stop pgcouch429
sleep 3
docker-compose up pgcouch429

# Restart caddy-gen after changes affecting web address routing

cd /srv/dkr/listo429c
docker-compose stop
sleep 14
sudo chmod -R 775 caddy-gen/certs
docker rm -f $(docker ps -a |    grep caddy       | awk '{print $1}')
docker images | grep caddy | awk '{print $1 ":" $2}' | xargs docker rmi
dkps
dkup

## see logs

- docker-compose up caddy-gen

---

---

Title: .
-----------------------2019-03-28[Mar-Thu]15-32PM

scratch..

docker-compose up phppo ponotepad

docker-compose up vpv445gb

docker-compose stop

docker-compose up adminer429 pgadmin

docker-compose up pgadmin
docker-compose up postgres429

docker-compose stop vpv445gb

docker-compose up vpv445gb

docker-compose restart caddy-gen

docker-compose stop caddy-gen

docker-compose up caddy-gen

https://t.david23.tk

docker-compose stop caddy-gen

docker-compose up --build --force-recreate caddy-gen

---

---

---

## Title: Start up instructions.

----------------------- 2019-03-18[Mar-Mon]19-59PM

- root .env file - copy from .env.example to .env
- copy ./docs/docker/couchdb/docker.ini.example.in2 to ./docker/couchdb/docker.ini
- copy docker-compose.example.yml to docker-compose.yml

```
docker-compose up couchdb

```

Delete data (because I had set it up previously)

```
     sudo rm -rf ../datasys/couch429c/
     sudo rm -rf ../datasys/postgres421/
     sudo rm -rf ../datasys/postgres429/

```

Setup couchdb system db's

```
curl -X PUT http://cuser:abc@192.168.88.58:6212/_users
curl -X PUT http://cuser:abc@192.168.88.58:6212/_replicator
curl -X PUT http://cuser:abc@192.168.88.58:6212/_global_changes

```

```
docker-compose up post445

```

visit: http://192.168.88.58:6214

visit: http://192.168.88.58:6212/_utils

`docker-compose up vpv445gb`

visit: http://192.168.88.58:6216

`docker-compose up postgres429`

```
cd couch-to-postgres
npm install
```

```
docker-compose up adminer429  pgadmin
```

Postgres:

    NOT - listodb.
    Use:  DB: postgres Schema: public
    I used adminer, go to postgres public and paste table creation sql from docker/postgres/init/pginit.sh

    Picture shows working setup..
    ../docs/couchtopostgres,pgcouch,setupdb-listotbl-192.168.88.60_5433-Adminer.jpg

`docker-compose up pgcouch429`

Got this error.

    pgcouch429_1   | post445gtbl: Could not get pgtables and checkpoints with: SELECT since FROM since_checkpoints WHERE pgtable='post445gtbl' AND enabled=True { error: relation "since_checkpoints" does not exist
    pgcouch429_1   | Error 42P01:post445gtbl in change
    pgcouch429_1   | post445gtbl: stopping stream
    pgcouch429_1   | post445gtbl: stopped

Solution: restart pgcouch429. OK now.

---

-----------------------2019-03-06[Mar-Wed]13-27PM

`docker-compose up sqlpad`

sqlpad settings

see this file and others in the folder.

./docs/sqlpad,postgres,query-SQLPad-Connections.jpg

---

sqlpad settings.

      192.168.88.60
      5433
      db postgres
      user postgres

    http://192.168.88.58:6152/
    dgleba@gmail.com
    pas,mr

---

example query:

    select
          doc -> 'list' as list,
          doc -> 'title' as title,
          doc -> 'updatedAt' as updatedat
    from listotbl
    WHERE doc ->> 'title' is not null  -- need ->> operator to make it text
    ORDER BY doc->'updatedAt' desc;

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
    from post445gtbl
    WHERE doc ->> 'rtype' = 'mlist'  -- need ->> operator to make it text
    ORDER BY doc->>'_id' desc;

---

docker-compose restart pgcouch429

---

---

2019-03-02

# Setup, or To move this project to other server.

- check .env files in each folder as needed. eg: root and couch-to-postgres
- setup postgres as needed. follow couch2postgres instructions. see docker/postgres/init/pginit.sh
- check couchdb docker.ini file. copy .../docs/docker/couchdb/docker.ini.example.in2 in as starter ini file.
- npm install in each folder as needed. eg: couch-to-postgres, vpv445g
- setup couch as needed. curl system tables like \_user.

Postgres:

NOT - listodb.  
Use: DB: postgres Schema: public
I used adminer, go to postgres public and paste table creation sql from pginit.sh.

Picture shows workig setup..
../docs/couchtopostgres,pgcouch,setupdb-listotbl-192.168.88.60_5433-Adminer.jpg

Couch:

curl -X PUT http://127.0.0.1:6212/_users
curl -X PUT http://127.0.0.1:6212/_replicator
curl -X PUT http://127.0.0.1:6212/_global_changes

curl -X PUT http://user:pass@127.0.0.1:6212/_users
curl -X PUT http://user:pass@127.0.0.1:6212/_replicator
curl -X PUT http://user:pass@127.0.0.1:6212/_global_changes

2019-03-02

```



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

./docs/sqlpad,postgres,query-SQLPad-Connections.jpg

_____________


sqlpad settings.

192.168.88.60
5433
db postgres
user postgres

http://192.168.88.60:6152/
dgleba@gmail.com
pas,ar

_____________



works:

select
       doc -> 'list' as list,
       doc -> 'title' as title,
       doc -> 'updatedAt' as updatedat
from listotbl
WHERE doc ->> 'title' is not null  -- need ->> operator to make it text
ORDER BY doc->'updatedAt' desc;

_____________


----------------------------------------------------


----------------------------------------------------
Title:  .
-----------------------2019-03-19[Mar-Tue]22-57PM

nextcloud


docker-compose stop maria nextcl

docker-compose up  maria nextcl

visit:    http://192.168.88.58:6218




NEXTCLOUD_ADMIN_USER=dgleba
NEXTCLOUD_ADMIN_PASSWORD=abc
NEXTCLOUD_DATA_DIR=/var/www/html/dat
NEXTCLOUD_TABLE_PREFIX=nxt_
NEXTCLOUD_TRUSTED_DOMAINS=nc.dg24.tk



----------------------------------------------------



----------------------------------------------------

Title:  . feature branch

-----------------------2019-03-29[Mar-Fri]19-07PM

worked!

list0429c

git co master
git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done
git pull
git fetch --all
git pull --all

  git checkout -b settings-app-vue master


vfeat=settings-app-vue
  git branch --set-upstream-to=origin/$vfeat $vfeat


#https://coderwall.com/p/9idt5g/keep-your-feature-branch-up-to-date
  git checkout master && git pull && git checkout - && git rebase master

git cap 'moved setttings to app.vue'


vfeat=settings-app-vue

git checkout master
git merge --no-ff $vfeat
git psa



----------------------------------------------------
----------------------------------------------------

feature branch  #2


export vfeat=syncurl-regex


git co master
git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done
git pull
git fetch --all
git pull --all

  git checkout -b $vfeat

  git branch --set-upstream-to=origin/$vfeat $vfeat

git b

#https://coderwall.com/p/9idt5g/keep-your-feature-branch-up-to-date
  git checkout master && git pull && git checkout - && git rebase master

git cap
git ldt

echo $vfeat

git checkout master
git merge --no-ff $vfeat
git psa



----------------------------------------------------


----------------------------------------------------
Title:  .
-----------------------2019-04-01[Apr-Mon]07-19AM

not working.. see error.


albe@vamp398:/srv/dkr/listo429c$ docker-compose   up pgcouch429
listo429c_postgres429_1 is up-to-date
listo429c_couchdb_1 is up-to-date
listo429c_pgcouch429_1 is up-to-date
Attaching to listo429c_pgcouch429_1
pgcouch429_1   | poststbl: stream.on error #Error: socket hang up# { Error: socket hang up
pgcouch429_1   |     at createHangUpError (_http_client.js:323:15)
pgcouch429_1   |     at Socket.socketOnEnd (_http_client.js:426:23)
pgcouch429_1   |     at Socket.emit (events.js:194:15)
pgcouch429_1   |     at endReadableNT (_stream_readable.js:1103:12)
pgcouch429_1   |     at process._tickCallback (internal/process/next_tick.js:63:19) code: 'ECONNRESET' }
pgcouch429_1   | Connected to postgres
pgcouch429_1   | poststbl: initial since=175
pgcouch429_1   | poststbl: Starting checkpointer
pgcouch429_1   | poststbl: Checkpoint 0 is current next check in: 120 seconds
pgcouch429_1   | poststbl: Checkpoint 0 is current next check in: 120 seconds
pgcouch429_1   | poststbl: Checkpoint 0 is current next check in: 120 seconds
pgcouch429_1   | poststbl: Checkpoint 0 is current next check in: 120 seconds
pgcouch429_1   | poststbl: Checkpoint 0 is current next check in: 120 seconds
pgcouch429_1   | poststbl: Checkpoint 0 is current next check in: 120 seconds



----------------------------------------------------


===================================================

# Older Instructions..

- check .env files in each folder as needed. eg: root and couch-to-postgres
- setup postgres as needed. follow couch2postgres instructions. see docker/postgres/init/pginit.sh
- check couchdb docker.ini file. copy .../docs/docker/couchdb/docker.ini.example.in2 in as starter ini file.
- npm install in in each folder as needed. eg: couch-to-postgres, vpv445g
- setup couch as needed. curl system tables like \_user.

Postgres:

NOT - listodb.
Use: DB: postgres Schema: public
I used adminer, go to postgres public and paste table creation sql from pginit.sh.

Picture shows workig setup..
../docs/couchtopostgres,pgcouch,setupdb-listotbl-192.168.88.60_5433-Adminer.jpg

Couch:

Edit these examples..

curl -X PUT http://127.0.0.1:6212/_users
curl -X PUT http://127.0.0.1:6212/_replicator
curl -X PUT http://127.0.0.1:6212/_global_changes

curl -X PUT http://user:pass@127.0.0.1:6212/_users
curl -X PUT http://user:pass@127.0.0.1:6212/_replicator
curl -X PUT http://user:pass@127.0.0.1:6212/_global_changes

# Older info..

Following is older info.

## Docker-compose

Docker compose file will run the project.

There are some things that are not automatically done on startup.

- copy .env.example and edit the settings, passwords, etc.
- postgres tables for the couch to postgres replication
- I need to add more to this list.

## Couchdb setup

- copy docker.ini.example.in
- start couchdb using `make cup`
- visit `http://192.168.88.42:6212/_utils/#/setup`
- Click the wrench icon. Setup single node.
- see pic setupsinglenode,couchdb.jpg
- It should now be ready to sync from the listo app.

## Couchdb to Postgresql replication

- Using this tool, data is replicated to postgres so it can be queried using many common tools.
- start postgres `make pup`
-

# listo429 app

## build.sh

This is older info. See app in `vpv445g` folder.

Use `make bh` to assemble the html/css/js files into index.html file. The files will be concatenated sorted by the numerical value in the name.

old:
Use `make b` to assemble the js files into the main shopping list js file. The files will be concatenated sorted by the numerical value in the name.

## to Update js and css that a users browser has cached.

To update js file in client browsers, change the name in the `dist` folder by incrementing the number and edit the index.html to use that file.

## Issues

- difficult to update js and css in android.
- possibly look for better way to split up the js and html file into smaller files.

## Todo

- documentation
- add autocomplete from data table
- add search
- address the need of knowing who edited what piece of info. login? authentication? require name with pin?
- is role based access needed?


End older instructions.

===================================================
```
