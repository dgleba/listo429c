
# setup couchdb

## check .env

enter user and password

## remove

  remove couchdb image and container
  
## start  

start up couchdb

## login 

http://192.168.88.42:6212/_utils/#/setup

Setup single node.

I went here and setup single node.

see pic  C:\n\Dropbox\csd\0-csd\listo429\offlineapp-pouchdb-hoodie\opennote407\2018-10-25 18_31_32-Project Fauxton - setupsinglenode,couchdb.jpg

or it could be setup using the api...

  `http://docs.couchdb.org/en/latest/install/setup.html#single-node-setup`



## setup

  enable cors

  set require_valid_user in both spots
  
  
##





# Verify setup. 2019-01-17


sudo rm -rf /srv/dkr/datasys/couch429c
sudo rm -rf /srv/dkr/listo429c/docker/couchdb/docker.ini
sudo chmod 775 -R /srv/dkr/listo429c/docker/
sudo chown  -R $USER:www-data /srv/dkr/listo429c/docker/
 

use C:\n\Dropbox\csd\0-csd\listo429\backup\docker.ini.example.in
  sftp://108.168.7.237:46271/srv/dkr/listo429c/doc/docker/couchdb/docker.ini.example.in
  
make cup

## login 

http://192.168.88.42:6212/_utils/#/setup

## setup

  setup single node  [this will make users table an others]
  
  
  
refresh listo app and it will sync.

