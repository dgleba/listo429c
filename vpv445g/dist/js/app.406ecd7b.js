(function(t){function e(e){for(var s,o,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)o=r[d],a[o]&&p.push(a[o][0]),a[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},a={app:0},i=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"09b3":function(t,e,n){"use strict";var s=n("69d3"),a=n.n(s);a.a},"13fc":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("v-app",{attrs:{id:"inspire"}},[n("v-toolbar",[n("v-toolbar-title",[t._v("App ")]),n("v-menu",{staticClass:"hidden-md-and-up"},[n("v-toolbar-side-icon",{attrs:{slot:"activator"},slot:"activator"}),n("v-list",[t._l(t.menu,function(e){return n("v-list-tile",{key:e.icon,attrs:{to:e.link,flat:""}},[n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)}),n("v-btn",{on:{click:function(e){t.settingshow="on"}}},[t._v("Settings")]),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.settingshow,expression:"settingshow"}],on:{click:function(e){t.settingshow=""}}},[t._v("Close Settings")])],2)],1),n("v-toolbar-items",{staticClass:"hidden-xs-and-down"},[t._l(t.menu,function(e){return n("v-btn",{key:e.icon,attrs:{to:e.link,flat:""}},[t._v("\n          "+t._s(e.title)+"\n        ")])}),n("v-btn",{attrs:{flat:""},on:{click:function(e){t.settingshow="on"}}},[t._v("Settings")]),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.settingshow,expression:"settingshow"}],on:{click:function(e){t.settingshow=""}}},[t._v(" Close Settings ")])],2)],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.settingshow,expression:"settingshow"}],staticClass:"panel panel-default"},[n("div",{staticClass:"localaapp"},[n("div",{attrs:{id:"dgdivright",align:"right"}},[t._v(t._s(t.dgversion))]),"settings"==t.mode?n("v-card",[n("v-card-title",[t._v("Settings")]),n("v-card-text",[t._v('\n          You can sync your data to a remote Apache CouchDB, IBM Cloudant or PouchDB server. Supply the URL, including\n          credentials and database name and click "Start Sync".\n          '),n("div",[t._v(" ")]),n("div",[t._v("URL first part")]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.syncpartA,expression:"syncpartA"}],attrs:{id:"dginput",type:"url"},domProps:{value:t.syncpartA},on:{input:function(e){e.target.composing||(t.syncpartA=e.target.value)}}})]),n("div",{staticClass:"sm-vert-div"}),n("div",[t._v("Password")]),n("div",["checkbox"===t.passwordFieldType?n("input",{directives:[{name:"model",rawName:"v-model",value:t.syncpass,expression:"syncpass"}],attrs:{id:"dginput",type:"checkbox"},domProps:{checked:Array.isArray(t.syncpass)?t._i(t.syncpass,null)>-1:t.syncpass},on:{change:function(e){var n=t.syncpass,s=e.target,a=!!s.checked;if(Array.isArray(n)){var i=null,o=t._i(n,i);s.checked?o<0&&(t.syncpass=n.concat([i])):o>-1&&(t.syncpass=n.slice(0,o).concat(n.slice(o+1)))}else t.syncpass=a}}}):"radio"===t.passwordFieldType?n("input",{directives:[{name:"model",rawName:"v-model",value:t.syncpass,expression:"syncpass"}],attrs:{id:"dginput",type:"radio"},domProps:{checked:t._q(t.syncpass,null)},on:{change:function(e){t.syncpass=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.syncpass,expression:"syncpass"}],attrs:{id:"dginput",type:t.passwordFieldType},domProps:{value:t.syncpass},on:{input:function(e){e.target.composing||(t.syncpass=e.target.value)}}}),n("button",{attrs:{type:"password",id:"dgbutton"},on:{click:t.switchVisibility}},[t._v("Show/hide")])]),n("div",[t._v("URL last part")]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.syncpartC,expression:"syncpartC"}],attrs:{id:"dginput",type:"text"},domProps:{value:t.syncpartC},on:{input:function(e){e.target.composing||(t.syncpartC=e.target.value)}}})]),n("div",[t._v(" ")]),t._v("Example... http://user:pass@localhost:5984/listdb\n          "),n("div",{staticClass:"sm-vert-div"},[t._v(" ")]),n("div",[t._v("     First part... http://user:")]),n("div",[t._v("     password... password")]),n("div",[t._v("     Last part. (host,port,database).. @couchdb.e29.com/listdb")]),n("div",{staticClass:"sm-vert-div"},[t._v(" ")]),n("h4",[t._v("Sync Status")]),"notsyncing"==t.syncStatus?n("v-chip",[t._v("Not Syncing")]):t._e(),"syncing"==t.syncStatus?n("v-chip",{attrs:{color:"info"}},[t._v("Syncing")]):t._e(),"syncerror"==t.syncStatus?n("v-chip",{attrs:{color:"error"}},[t._v("Sync Error")]):t._e(),t._v("\n          "+t._s(t.syncURL)+" , "+t._s(t.syncpartA)+" _***_ "+t._s(t.syncpartC)+"\n        ")],1),n("v-card-actions",[n("v-btn",{on:{click:t.onClickStartSync}},[t._v("Start Sync")]),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.settingshow,expression:"settingshow"}],on:{click:function(e){t.settingshow=""}}},[t._v(" Close Settings ")])],1)],1):t._e()],1),n("div",t._l(7,function(e){return n("div",[t._v(" ")])}),0)]),n("router-view")],1)],1)},i=[],o=(n("4917"),n("d6e1")),r=new o["a"]("maindb"),c={data:function(){return{dgversion:"vpv445g. version 18",settingshow:"",aset:"asetting",passwordFieldType:"password",mode:"settings",syncURL:"",syncpartA:"",syncpass:"",syncpartC:"",syncStatus:"notsyncing",menu:[{icon:"a",title:"Posts",link:"/"},{title:"Sync",link:"/settings"},{title:"StatusTag",link:"/statusfield"},{icon:"home",title:"Help",link:"/home"}]}},created:function(){var t=this;r.get("_local/user").then(function(e){t.syncpartA=e.syncpartA,t.syncpass=e.syncpass,t.syncpartC=e.syncpartC,t.startSync()}).catch(function(t){})},methods:{menuItems:function(){return this.menu},switchVisibility:function(){this.passwordFieldType="password"===this.passwordFieldType?"text":"password"},saveLocalDoc:function(t){return r.get(t._id).then(function(e){return t._rev=e._rev,r.put(t)}).catch(function(e){return r.put(t)})},onClickStartSync:function(){var t=this,e={_id:"_local/user",syncpartA:this.syncpartA,syncpass:this.syncpass,syncpartC:this.syncpartC};this.saveLocalDoc(e).then(function(){t.startSync()})},startSync:function(){var t=this;this.syncStatus="notsyncing",this.sync&&(this.sync.cancel(),this.sync=null),this.syncpartA.concat(this.syncpass).concat(this.syncpartC)&&(this.syncStatus="syncing",this.sync=r.sync(this.syncpartA.concat(this.syncpass).concat(this.syncpartC),{live:!0,retry:!0}).on("change",function(e){if("pull"==e.direction&&e.change&&e.change.docs)for(var n in e.change.docs){var a=e.change.docs[n],i=null;if(a._id.match(/^item/))i=t.shoppingListItems;else{if(!a._id.match(/^list/))continue;i=t.shoppingLists}var o=t.findDoc(i,a._id);o.doc?1==a._deleted?i.splice(o.i,1):(delete a._revisions,s["default"].set(i,o.i,a)):a._deleted||i.unshift(a)}}).on("error",function(e){t.syncStatus="syncerror"}).on("denied",function(e){t.syncStatus="syncerror"}).on("paused",function(e){e&&(t.syncStatus="syncerror")}))}},pouch:{localaapp:function(){return{database:"maindb",selector:{},first:!0}}}},l=c,u=(n("09b3"),n("2877")),d=Object(u["a"])(l,a,i,!1,null,"be37755e",null),p=d.exports,v=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("div",{staticClass:"atable"},[n("div",{staticClass:"sm-vert-div"},[t._v(" ")]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-3"},[n("router-link",{staticClass:"btn btn-success",attrs:{to:{name:"create"}}},[t._v("Create")])],1),n("div",{staticClass:"col-md-9"},[n("v-input"),t._v("Search (text fields contains)\n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.qsearch,expression:"qsearch"}],attrs:{id:"dginput"},domProps:{value:t.qsearch},on:{input:function(e){e.target.composing||(t.qsearch=e.target.value)}}})],1)]),n("table",{staticClass:"table table-hover"},[n("thead",[n("tr",[n("th",[t._v("Actions")]),n("th",[t._v("Title")]),n("th",[t._v("Body")]),n("th",[t._v("Statusfld")]),n("th",[t._v("_id")])])]),n("tbody",t._l(t.atable,function(e){return n("tr",{key:e._id},[n("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"edit",params:{id:e._id}}}},[t._v("Edit")]),n("td",[t._v(t._s(e.title))]),n("td",[t._v(t._s(t._f("truncate")(e.body,50," ..")))]),n("td",[t._v(t._s(e.statusfld))]),n("td",[t._v(t._s(e._id))])],1)}),0)])])])},m=[],h=(n("6b54"),{data:function(){return{mrow:{},atable:{},resultsPerPage:50,currentPage:1,qsearch:""}},created:function(){console.log(this.atable)},filters:{truncate:function(t,e,n){return t=t||".",t.substring(0,e)+n}},methods:{},pouch:{mainlists2:function(){},atable:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){return{database:"maindb",selector:{rtype:"mlist",$or:[{body:{$regex:this.qsearch}},{title:{$regex:this.qsearch}},{statusfld:{$regex:this.qsearch}}]},sort:[{_id:"desc"}],limit:this.resultsPerPage}})}}),b=h,y=(n("afd4"),Object(u["a"])(b,f,m,!1,null,"7edab2de",null)),_=y.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"svdiv"}),n("h5",[t._v("Create")]),n("v-app",{attrs:{id:"inspire_cr"}},[n("form",{on:{submit:function(e){return e.preventDefault(),t.add_mrow(e)}}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-11"},[n("div",{staticClass:"form-group"},[n("label",[t._v("Title:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.mrow.title,expression:"mrow.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.mrow.title},on:{input:function(e){e.target.composing||t.$set(t.mrow,"title",e.target.value)}}})])])]),n("v-textarea",{attrs:{name:"input-7-1",solo:"",label:"Body","auto-grow":""},model:{value:t.mrow.body,callback:function(e){t.$set(t.mrow,"body",e)},expression:"mrow.body"}}),n("v-card",[n("v-autocomplete",{attrs:{label:"Statusfield",items:t.statusflds,"item-text":"name","persistent-hint":!0,color:"blue",multiple:!0},model:{value:t.mrow.statusfld,callback:function(e){t.$set(t.mrow,"statusfld",e)},expression:"mrow.statusfld"}})],1),n("br"),n("div",{staticClass:"form-group"},[n("button",{staticClass:"btn btn-primary"},[t._v("Create")])])],1)])],1)},w=[],C=n("6275"),x={data:function(){return{mrow:{},resultsPerPage:25,currentPage:1,qsearch:"190221_2046",statusflds:[],statusnames:[],atable:{}}},created:function(){},methods:{addPost_api:function(){console.log(this.post)},add_mrow:function(){var t=this,e=C.iuid();console.log("viuid= ",e),console.log(this.mrow),this.$pouch.post("maindb",{title:this.mrow.title,body:this.mrow.body,statusfld:this.mrow.statusfld,rtype:"mlist",_id:e}).then(function(){t.$router.push({name:"posts"})})},noop:function(){window.alert("noop")}},pouch:{atable:function(){return{database:"maindb",selector:{},limit:this.resultsPerPage}},statusflds:function(){return{database:"maindb",selector:{rtype:"statusfld_type"},sort:[{name:"asc"}],include_docs:"false",fields:["name"],limit:3456}}}},S=x,k=(n("e390"),Object(u["a"])(S,g,w,!1,null,"3827d654",null)),P=k.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"atable"},[n("div",{staticClass:"svdiv"}),n("form",{on:{submit:function(e){return e.preventDefault(),t.update_mrow(e)}}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-11"},[n("div",{staticClass:"form-group"},[n("label",[t._v(" Title: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.atable.title,expression:"atable.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.atable.title},on:{input:function(e){e.target.composing||t.$set(t.atable,"title",e.target.value)}}})])])]),n("v-textarea",{attrs:{name:"input-7-1",solo:"",label:"Body","auto-grow":""},model:{value:t.atable.body,callback:function(e){t.$set(t.atable,"body",e)},expression:"atable.body"}}),n("v-card",[n("v-autocomplete",{attrs:{label:"Statusfield",items:t.statusflds,"item-text":"name","persistent-hint":!0,color:"blue",multiple:!0},model:{value:t.atable.statusfld,callback:function(e){t.$set(t.atable,"statusfld",e)},expression:"atable.statusfld"}})],1),n("br"),n("p",{staticClass:"text-sm-center"},[t._v("   _id: "+t._s(t.atable._id)+" --  Updated: "+t._s(t.atable.updatedat)+" ")]),n("div",{staticClass:"form-group"},[n("button",{staticClass:"btn btn-primary"},[t._v("Update")]),n("button",{staticClass:"btn btn-danger float-right",on:{click:function(e){return e.preventDefault(),t.delete_mrow(t.mrow._id)}}},[t._v("\n        Delete\n      ")])])],1)])},A=[],D=n("6275"),N={data:function(){return{mrow:{},statusflds:[],atable:{}}},created_api:function(){},methods:{updatePost_api:function(){},update_mrow:function(){var t=this;this.atable.updatedat=D.updatedat(),this.$pouch.put("maindb",this.atable).then(function(){t.$router.push({name:"posts"})})},delete_mrow:function(){var t=this,e=confirm("Are you sure you want to delete?");1==e&&this.$pouch.remove("maindb",{_id:this.$route.params.id,_rev:this.atable._rev}).then(function(){t.$router.push({name:"posts"})})},confirm:function(){this.$refs.confirm.open("Delete","Are you sure?",{color:"red"}).then(function(t){})}},pouch:{atable:function(){return{database:"maindb",selector:{_id:this.$route.params.id},first:!0}},statusflds:function(){return{database:"maindb",selector:{rtype:"statusfld_type"},sort:[{name:"asc"}],include_docs:"false",fields:["name"],limit:3456}}}},j=N,O=Object(u["a"])(j,$,A,!1,null,null,null),T=O.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"maindb"},[n("br"),n("div",[t._v("ADD new items here..")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.arow.name,expression:"arow.name"}],attrs:{id:"dginput",placeholder:"...Enter New... "},domProps:{value:t.arow.name},on:{input:function(e){e.target.composing||t.$set(t.arow,"name",e.target.value)}}}),n("button",{attrs:{id:"dgbutton"},on:{click:t.addrow}},[t._v("Save `Statusfield'")]),n("div",[t._v("\n    Click on an item below to EDIT it. Click outside that box to finish (like\n    a spreadsheet).\n  ")]),t._l(t.maindb,function(e){return n("div",[n("div",{staticClass:"svdiv"}),n("button",{attrs:{id:"dgbutton"},on:{click:function(n){t.delconfm=t.confirmdel(),1==t.delconfm&&t.$pouch.remove("maindb",e)}}},[t._v("\n      Delete\n    ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"arow.name"}],attrs:{id:"dginput"},domProps:{value:e.name},on:{change:function(n){t.$pouch.put("maindb",e)},input:function(n){n.target.composing||t.$set(e,"name",n.target.value)}}}),t._v("\n    "+t._s(e._id)+", "+t._s(e.updatedat)+",\n  ")])})],2)},q=[],F=(n("7f7f"),n("6275")),L={data:function(){return{arow:{},resultsPerPage:125,currentPage:1,qsearch:"",delconfm:null,updatedat:null,statusflds_x:[]}},methods:{addrow:function(){var t=F.iuid();this.$pouch.post("maindb",{name:this.arow.name,rtype:"statusfld_type",updatedat:F.updatedat(),_id:t}),this.arow.name=""},editrow:function(){this.$pouch.put("maindb",{name:this.arow.name,rtype:"statusfld_type",updatedat:F.updatedat(),_id:this.arow._id,_rev:this.arow._rev})},confirmdel:function(){var t=confirm("Are you sure you want to delete?");return t}},pouch:{maindb:function(){return{selector:{rtype:"statusfld_type"},sort:[{name:"asc"}],limit:this.resultsPerPage}}}},M=L,B=(n("d466"),Object(u["a"])(M,E,q,!1,null,"1799d338",null)),I=B.exports,U=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),n("div",{staticClass:"svdiv"}),n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-md-8"},[n("div",{staticClass:"card card-default"},[n("div",{staticClass:"card-header"},[t._v("Help")]),n("div",{staticClass:"card-body"},[n("a",{attrs:{href:"https://github.com/dgleba/listo429c/tree/master/vpv445g"}},[t._v(" \n          https://github.com/dgleba/listo429c (or similar repo in my Github)")]),n("li",[t._v("\n          This particular app is a Offline First "),n("b",[t._v("Progressive Web App")]),t._v(" built using "),n("b",[t._v("Vue.js and PouchDB. ")])]),n("li",[t._v("\n              It's content updates live when a connection exists.\n           ")]),n("li",[t._v("\n              It syncs with "),n("b",[t._v("Apache Couchdb")]),t._v(". If offline, it will sync when a connection exists later. \n          ")]),n("li",[t._v("\n             It's content updates live when a connection exists.\n          ")]),n("li",[t._v("I call it - "),n("b",[t._v("AnApp")]),t._v(" -  a generic reusable app for notes, or any list driven app.\n          ")]),n("li",[t._v("\n             Copy this app and edit the forms etc to have the fields you wish.\n          ")])])])])])])}],R={},Y=R,V=Object(u["a"])(Y,U,H,!1,null,null,null),J=V.exports;s["default"].use(v["a"]);var Z=new v["a"]({mode:"history",base:"/",routes:[{name:"posts",path:"/",component:_},{name:"create",path:"/create",component:P},{name:"edit",path:"/edit/:id",component:T},{path:"/statusfield",component:I},{name:"home",path:"/home",component:J}]}),G=n("2f62");s["default"].use(G["a"]);var W=new G["a"].Store({state:{},mutations:{},actions:{}}),z=n("9483");Object(z["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("ab8b");var K=n("ce5b"),Q=n.n(K),X=(n("bf40"),n("5d16")),tt=n("4833"),et=n.n(tt);s["default"].config.productionTip=!1,n("ed18").config(),s["default"].use(Q.a,{theme:{}});var nt=n("ce04");s["default"].use(nt),o["a"].plugin(X["a"]),o["a"].plugin(et.a),s["default"].use(n("1629"),{pouch:o["a"],defaultDB:"config"}),new s["default"]({router:Z,store:W,render:function(t){return t(p)}}).$mount("#app")},6275:function(t,e,n){"use strict";n.r(e),n.d(e,"iuid",function(){return r}),n.d(e,"updatedat",function(){return c});var s=n("e814"),a=n.n(s),i=n("5a0c"),o=n.n(i);function r(){var t=o()().format("YYMMDD_HHmm.ss.SSSZZ-").concat(a()(1e4*Math.random()));return t}function c(){var t=o()().format("YYMMDD_HH.mm.ss");return t}},"62aa":function(t,e,n){},"69d3":function(t,e,n){},"7fe4":function(t,e,n){},afd4:function(t,e,n){"use strict";var s=n("7fe4"),a=n.n(s);a.a},d466:function(t,e,n){"use strict";var s=n("13fc"),a=n.n(s);a.a},e390:function(t,e,n){"use strict";var s=n("62aa"),a=n.n(s);a.a}});
//# sourceMappingURL=app.406ecd7b.js.map