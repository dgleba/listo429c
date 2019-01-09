

// this will be the PouchDB database
var db = new PouchDB('shopping');

// template shopping list object
// Added title_description field here and on form. David Gleba 2018-12-04a
const sampleShoppingList = {
  "_id": "",
  "type": "list",
  "version": 1,
  "title": "",
  "title_description": "",
  "checked": false,
  "place": {
    "title": "",
    "license": null,
    "lat": null,
    "lon": null,
    "address": {}
  },
  "createdAt": "",
  "updatedAt": ""
};

// template shopping list item object
const sampleListItem = {
  "_id": "",
  "type": "item",
  "version": 1,
  "title": "",
  "checked": false,
  "createdAt": "",
  "updatedAt": ""
};

/**
 * Sort comparison function to sort an object by "createdAt" field
 *
 * @param  {String} a
 * @param  {String} b
 * @returns {Number}
 */
const newestFirst = (a, b) => {
  if (a.createdAt > b.createdAt) return -1;
  if (a.createdAt < b.createdAt) return 1;
  return 0
};

/**
 * Perform an "AJAX" request i.e call the URL supplied with the 
 * a querystring constructed from the supplied object
 *
 * @param  {String} url 
 * @param  {Object} querystring 
 * @returns {Promise}
 */
const ajax = function (url, querystring) {
  return new Promise(function (resolve, reject) {

    // construct URL
    var qs = [];
    for (var i in querystring) { qs.push(i + '=' + encodeURIComponent(querystring[i])) }
    url = url + '?' + qs.join('&');

    // make HTTP GET request
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200) {
          var obj = JSON.parse(xmlhttp.responseText);
          resolve(obj);
        } else {
          reject(null);
        }
      }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  });
};

// Vue Material plugin
Vue.use(VueMaterial);

// Vue Material theme
Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'white',
  warn: 'red',
  background: 'grey'
});


// update js files ...
// https://stackoverflow.com/questions/1011605/clear-the-cache-in-javascript
// https://stackoverflow.com/a/5497508/2744870
// https://stackoverflow.com/a/10956125/2744870
// var torefreshs = ['shoppinglist.js', 'shoppinglist.css'] ; // list of js to be refresh


var scripts =  document.getElementsByTagName('script');
// var torefreshs = ['shoppinglist.js'] ; // list of js to be refresh
var torefreshs = ['shoppinglist.js', 'shoppinglist.css'] ; // list of js to be refresh
var key = 19; // change this key every time you want force a refresh
for(var i=0;i<scripts.length;i++){ 
   for(var j=0;j<torefreshs;j++){ 
      if(scripts[i].src && (scripts[i].src.indexOf(torefreshs[j]) > -1)){
        new_src = scripts[i].src.replace(torefreshs[j],torefreshs[j] + 'k=' + key );
        scripts[i].src = new_src; // change src in order to refresh js
      } 
   }
}


var scripts =  document.getElementsByTagName('link');
var torefreshs = ['shoppinglist.js', 'shoppinglist.css'] ; // list of js to be refresh
var key = 20; // change this key every time you want force a refresh
for(var i=0;i<scripts.length;i++){ 
   for(var j=0;j<torefreshs;j++){ 
      if(scripts[i].src && (scripts[i].src.indexOf(torefreshs[j]) > -1)){
        new_src = scripts[i].src.replace(torefreshs[j],torefreshs[j] + 'k=' + key );
        scripts[i].src = new_src; // change src in order to refresh js
      } 
   }
}


/* 
function reloadScripts(toRefreshList['shoppinglist.js', 'shoppinglist.css'] , 16 ) {
  var scripts = document.getElementsByTagName('script');
  for (var i = 0; i < scripts.length; i++) {
    var aScript = scripts[i];
    for (var j = 0; j < toRefreshList.length; j++) {
      var toRefresh = toRefreshList[j];
      if (aScript.src && (aScript.src.indexOf(toRefresh) > -1)) {
        new_src = aScript.src.replace(toRefresh, toRefresh + '?k=' + key);
        // console.log('Force refresh on cached script files. From: ' + aScript.src + ' to ' + new_src)
        aScript.src = new_src;
      }
    }
  }
}
*/