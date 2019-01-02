

no need to create db..


https://usera:userap@couch.dg.jgleba.com/opennote

http://usera:userap@192.168.88.42:6212/listo429c2db

http://usera:admin429c@192.168.88.42:6212/listo429cdb


https://usera:admin429c@couch.davidg.ml/listo429c2db



----------------------------------------------------
Title:  .
-----------------------2018-12-03[Dec-Mon]23-04PM

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
pw my429adm


----------------------------------------------------

----------------------------------------------------
Title:  .
-----------------------2018-12-23[Dec-Sun]10-53AM

docker logs -f  listo429c_pgcouch429_1

docker-compose restart pgcouch429


docker-compose restart   listo429c

docker logs -f  listo429c_listo429c_1



----------------------------------------------------


