
# Couchdb permissions.


See also..
C:\n\Dropbox\csd\computer\vuepouch\listo429notes\couchdb.permissions.know.102.txt




db=http://usera:mypassword@192.168.88.60:6212


# _____________


add a user..


one...


# NOTE username in two places below...
curl -X PUT $db/_users/org.couchdb.user:dgleba -d '{"name": "dgleba", "password": "mypassword", "roles": [], "type": "user"}'

many...


 curl -X POST $db/_users/_bulk_docs -d @-  << EOF
{"docs": [
    {"_id": "org.couchdb.user:mphillips", "name": "mphillips", "password": "mypassword", "roles": [], "type": "user"},
    {"_id": "org.couchdb.user:dgleba", "name": "dgleba", "password": "mypass", "roles": [], "type": "user"},
    {"_id": "org.couchdb.user:admdgleba", "name": "admdgleba", "password": "mypass", "roles": [], "type": "user"}
]}
EOF


# _____________


Set  member users 

 curl  -X PUT $db/_global_changes/_security/ -d @- << EOF
{"admins":{"names":["admgleba"],"roles":[]}, "members": {"names":["dgleba"],"roles":[]} }
EOF

 curl  -X PUT $db/_replicator/_security/ -d @- << EOF
{"admins":{"names":["admgleba"],"roles":[]}, "members": {"names":["dgleba"],"roles":[]} }
EOF

 curl  -X PUT $db/_users/_security/ -d @- << EOF
{"admins":{"names":["admgleba"],"roles":[]}, "members": {"names":["dgleba"],"roles":[]} }
EOF

 curl  -X PUT $db/listo429c2db/_security/ -d @- << EOF
{"admins":{"names":["admgleba"],"roles":[]}, "members": {"names":["dgleba"],"roles":[]} }
EOF

 curl  -X PUT $db/postsdb/_security/ -d @- << EOF
{"admins":{"names":["admgleba"],"roles":[]}, "members": {"names":["mphillips","dgleba"],"roles":[]} }
EOF

 curl  -X PUT $db/maintdb/_security/ -d @- << EOF
{"admins":{"names":["admgleba"],"roles":[]}, "members": {"names":["mphillips","dgleba"],"roles":[]} }
EOF




https://usera:pw@couch-108-168-7-24.nip.io/maintdb
https://mphillips:pw@couch-108-168-7-24.nip.io/maintdb



# _____________


password updating

https://docs.couchdb.org/en/2.2.0/intro/security.html
https://docs.couchdb.org/en/2.2.0/intro/security.html#password-changing

curl -X GET http://localhost:5984/_users/org.couchdb.user:jan
{
    "_id": "org.couchdb.user:jan",
    "_rev": "1-e0ebfb84005b920488fc7a8cc5470cc0",
    "name": "jan",
    "password_scheme": "pbkdf2",
    "type": "user"
}
Here is our user’s document. We may strip hashes from the stored document to reduce the amount of posted data:

curl -X PUT http://localhost:5984/_users/org.couchdb.user:jan \
     -H "Accept: application/json" \
     -H "Content-Type: application/json" \
     -H "If-Match: 1-e0ebfb84005b920488fc7a8cc5470cc0" \
     -d '{"name":"jan", "roles":[], "type":"user", "password":"orange"}'

{"ok":true,"id":"org.couchdb.user:jan","rev":"2-ed293d3a0ae09f0c624f10538ef33c6f"}

Updated! Now let’s check that the password was really changed:
  curl -X POST http://localhost:5984/_session -d 'name=jan&password=apple'









# _____________


there must be a member..

Anyone can read docs in asgard again — what’s the deal with that? Well, an empty array for "names" in "members" doesn’t mean nobody, it means anybody. Weird, I know. Fortunately we have Asgard’s Admin Odin now, so he can fix that.

https://medium.com/@eiri/couchdb-authorization-in-a-database-58c8ee633c96


ref..
https://www.staticshin.com/programming/easy-user-accounts-management-with-couchdb/



# _____________

# 