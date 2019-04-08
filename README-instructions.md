# Instructions

11----------------------------------------------------

# Setup, or To move this project to other server.

Note: I am working on better instructions.

They are in ./README-installation-notes.md

25----------------------------------------------------

# Restart Instructions:

## Restart after new vpv445g build

docker-compose stop vpv445gb
sleep 3
docker-compose up vpv445gb
dkps

## Restart couch-to-postgres if it's not working

### look at logs..

docker-compose up pgcouch429

### stop and start

- this shows the logs on start...

docker-compose stop pgcouch429
sleep 3
docker-compose up pgcouch429

- this shows no logs...

docker-compose restart pgcouch429

## nextcloud

docker-compose restart nextcl


## Restart caddy-gen after changes affecting web address routing

cd /srv/dkr/listo429c
docker-compose stop caddy-gen
sleep 14
sudo chmod -R 775 caddy-gen/certs
docker rm -f $(docker ps -a |    grep caddy       | awk '{print $1}')
docker images | grep caddy | awk '{print $1 ":" $2}' | xargs docker rmi
dkps
dkup

## see logs

- docker-compose up caddy-gen

31----------------------------------------------------

# Git feature branch workflow

export vfeat=syncurl-regex

git co master
git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done
git pull
git fetch --all
git pull --all

git checkout -b \$vfeat

git branch --set-upstream-to=origin/$vfeat $vfeat
  
git b
  
#https://coderwall.com/p/9idt5g/keep-your-feature-branch-up-to-date
git checkout master && git pull && git checkout - && git rebase master

git cap
git ldt

echo \$vfeat

git checkout master
git merge --no-ff \$vfeat
git psa

41----------------------------------------------------

# ===================================================

# ===================================================

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
