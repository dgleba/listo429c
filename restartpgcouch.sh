#!/usr/bin/env bash
echo ~----------~----------Startingb $HOSTNAME, pwd: `pwd`, "${BASH_SOURCE[0]}" $(date +" %Y-%m-%d_%H.%M.%S")
echo "${BASH_SOURCE[@]}"  # echo full bashsource array
#
date ; set +vx  ; set -vx ; # echo off, then echo on
#

cd /srv/dkr/listo429c

date >> /srv/dkr/log/pgcouchstart.log

mv /srv/dkr/log/cron.pgcouchrestart.log  /srv/dkr/log/cron.pgcouchrestart_$(date +"%Y-%m-%d_%H.%M.%S").log

# no..  mv /srv/dkr/log/pgcouch99.log  /srv/dkr/log/pgcouch99_$(date +" %Y-%m-%d_%H.%M.%S").log


docker-compose stop pgcouch429
sleep 4
docker-compose up pgcouch429
