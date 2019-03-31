# MEVN example converted to use pouchdb

## Code is at Github.

 https://github.com/dgleba/listo429c/vpv445g 


# todo

 - housekeeping. make variable name consistent. remove uneeded items. etc.

## Status

 - 2019-03-31 working on getting sync to resume automatically. 


## Includes:

tech used..

- Vuejs.org v2.5
- pouchdb v7
- vuetify (styling and screen inputs like autocomplete)
- getbootstrap.com v3.3 css (styling) (right now this is an odd mix of vuetify and bootstrap)
- pouch-vue (connects vue with pouchdb)
- vue-router
- vue-cli v3 (generate project with PWA and paste in mevn code converted to pouch calls)
- webpack
- couchdb - sync data to server db from pouchdb
- html css js (for example see w3schools.com)
- offline PWA web app

See package.json for more details.

## The concept

This is meant to be an example app that can be copied and altered for use in another specific purpose.

There is a main data table and supporting tables that supply autocomplete suggestions.
This brings consistency to the autocompleted fields you can add like category, task-type,
supplier-name, machine-number, employee name, etc.

You edit the main data table fields or attributes.
Then edit the supporting tables used in the autocomplete fields.

Start editing the createcomponent.vue.
That is where the data table is defined in the form in the template and the pouch.put
routine that writes the data to the pouchdb.

## Source:

```
Original project source for Vue rest api app: https://github.com/KrunalLathiya/MEVNCRUDExample
https://appdividend.com/2018/11/21/mevn-stack-tutorial-with-example-from-scratch/

I replaced  rest api calls [express] with vue-pouch / pouch-vue calls.
See:
https://github.com/buhrmi/vue-pouch

Todo:
 - Add couchdb sync
 - make it a PWA  - offline web app

Done..
 - Convert to  https://github.com/MDSLKTR/pouch-vue
 - Add autocomplete fields

David Gleba 2019-02-22_Fri_07.09-AM
```

## Status History

- 2019-02-26_Tue_22.02-PM 
    basic app is complete with pouch, vue, search, autocomplete, both vuetify and bootstrap (messy but working).

- 2019-02-25_Mon_22.59-PM vue-material autocomplete has a bug with sub term - even typing a letter will
  not result in populating the field with the selection.

- 2019-02-25_Mon_22.59-PM vue-material autocomplete has bug. with sub term even typing a letter will not result in populating the field with the selection. for example, see https://github.com/vuematerial/vue-material/issues/1937.

* 2019-02-25 cleaned crud, search. maindb, mrow, bootstrap. no autocomplete.

* 2019-02-23_Sat_23.47-PM `edit` and `delete` are working.

* 2019-02-23_Sat_09.29-AM:: `create post` and `posts` are working.
  I set edit path to a constant to avoid error for now.



===================================================



# vpv445g


## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

----------------------------------------------------

