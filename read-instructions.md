# Instructions

## build.sh

Use `make bh` to assemble the html/css/js files into index.html file. The files will be concatenated sorted by the numerical value in the name.

old:
  Use `make b` to assemble the js files into the main shopping list js file. The files will be concatenated sorted by the numerical value in the name.

## Docker-compose

Docker compose file will run the project. 

There are some things that are not automatically done on startup.

  - copy .env.example and edit the settings, passwords, etc.
  - postgres tables for the couch to postgres replication
  - I need to add more to this list.
    
    
## Couchdb setup

  - copy docker.ini.example.in

    
# Issues

 - difficult to update js and css in android.
 - possibly look for better way to split up the js and html file into smaller files.

# Todo

 - documentation
 - add autocomplete from data table
 - add search
 - address the need of knowing who edited what piece of info. login? authentication? require name with pin?
 - is role based access needed?

