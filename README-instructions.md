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
