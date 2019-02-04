

// update js files ...
// https://stackoverflow.com/questions/1011605/clear-the-cache-in-javascript
// https://stackoverflow.com/a/5497508/2744870
// https://stackoverflow.com/a/10956125/2744870
// var torefreshs = ['shoppinglist.js', 'shoppinglist.css'] ; // list of js to be refresh


/* 
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
*/


/* 
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
 */


 

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