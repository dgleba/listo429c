(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)r=o[d],a[r]&&p.push(a[r][0]),a[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},a={app:0},i=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var s=n("64a9"),a=n.n(s);a.a},"2a76":function(t,e,n){"use strict";var s=n("a239"),a=n.n(s);a.a},"533f":function(t,e,n){"use strict";var s=n("61de"),a=n.n(s);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("v-app",{attrs:{id:"inspire"}},[n("v-toolbar",[n("v-toolbar-title",[t._v("AnApp.  ")]),n("v-menu",{staticClass:"hidden-md-and-up"},[n("v-toolbar-side-icon",{attrs:{slot:"activator"},slot:"activator"}),n("v-list",t._l(t.menu,function(e){return n("v-list-tile",{key:e.icon,attrs:{to:e.link,flat:""}},[n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)}),1)],1),n("v-toolbar-items",{staticClass:"hidden-xs-and-down"},t._l(t.menu,function(e){return n("v-btn",{key:e.icon,attrs:{to:e.link,flat:""}},[t._v(t._s(e.title))])}),1)],1),n("router-view")],1)],1)},i=[],r={data:function(){return{menu:[{icon:"home",title:"home",link:"/"},{icon:"a",title:"Posts",link:"/posts"},{title:"Statusfield",link:"/statusfield"},{title:"Settings",link:"/settings"}]}},methods:{menuItems:function(){return this.menu}}},o=r,c=(n("034f"),n("2877")),l=Object(c["a"])(o,a,i,!1,null,null,null),u=l.exports,d=n("8c4f"),p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),n("div",{staticClass:"svdiv"}),n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-md-8"},[n("div",{staticClass:"card card-default"},[n("div",{staticClass:"card-header"},[t._v("Home Component")]),n("div",{staticClass:"card-body"},[t._v("Welcome.")])])])])])}],m={},f=m,h=Object(c["a"])(f,p,v,!1,null,null,null),y=h.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"svdiv"}),n("h5",[t._v("Create")]),n("v-app",{attrs:{id:"inspire_cr"}},[n("form",{on:{submit:function(e){return e.preventDefault(),t.add_mrow(e)}}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-11"},[n("div",{staticClass:"form-group"},[n("label",[t._v("Title:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.mrow.title,expression:"mrow.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.mrow.title},on:{input:function(e){e.target.composing||t.$set(t.mrow,"title",e.target.value)}}})])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-11"},[n("div",{staticClass:"form-group"},[n("label",[t._v("Body:")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.mrow.body,expression:"mrow.body"}],staticClass:"form-control",attrs:{rows:"5"},domProps:{value:t.mrow.body},on:{input:function(e){e.target.composing||t.$set(t.mrow,"body",e.target.value)}}})])])]),n("v-card",[n("v-autocomplete",{attrs:{label:"Statusfield",items:t.statusflds,"item-text":"name","persistent-hint":!0,color:"blue",multiple:!0},model:{value:t.mrow.statusfld,callback:function(e){t.$set(t.mrow,"statusfld",e)},expression:"mrow.statusfld"}})],1),n("br"),n("div",{staticClass:"form-group"},[n("button",{staticClass:"btn btn-primary"},[t._v("Create")])])],1)])],1)},b=[],g=n("6275"),w={data:function(){return{mrow:{},resultsPerPage:25,currentPage:1,qsearch:"190221_2046",statusflds:[],statusnames:[],atable:{}}},created:function(){},methods:{addPost_api:function(){console.log(this.post)},add_mrow:function(){var t=this,e=g.iuid();console.log("viuid= ",e),console.log(this.mrow),this.$pouch.post("maindb",{title:this.mrow.title,body:this.mrow.body,statusfld:this.mrow.statusfld,rtype:"mlist",_id:e}).then(function(){t.$router.push({name:"posts"})})},noop:function(){window.alert("noop")}},pouch:{atable:function(){return{database:"maindb",selector:{},limit:this.resultsPerPage}},statusflds:function(){return{database:"maindb",selector:{rtype:"statusfld_type"},sort:[{name:"asc"}],include_docs:"false",fields:["name"],limit:3456}}}},C=w,S=(n("533f"),Object(c["a"])(C,_,b,!1,null,"379e6dbe",null)),x=S.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspireindex"}},[n("div",{staticClass:"atable"},[n("div",{staticClass:"svdiv"}),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-3"},[n("router-link",{staticClass:"btn btn-success",attrs:{to:{name:"create"}}},[t._v("Create\n      ")])],1),n("div",{staticClass:"col-md-9"},[n("v-input"),t._v("\n      Search main-table -- contains  "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.qsearch,expression:"qsearch"}],attrs:{id:"dginput"},domProps:{value:t.qsearch},on:{input:function(e){e.target.composing||(t.qsearch=e.target.value)}}})],1)]),n("table",{staticClass:"table table-hover "},[n("thead",[n("tr",[n("th",[t._v("Actions")]),n("th",[t._v("Title")]),n("th",[t._v("Body")]),n("th",[t._v("_id")])])]),n("tbody",t._l(t.atable,function(e){return n("tr",{key:e._id},[n("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"edit",params:{id:e._id}}}},[t._v("Edit")]),n("td",[t._v(t._s(e.title))]),n("td",[t._v(t._s(e.body))]),n("td",[t._v(t._s(e._id))])],1)}),0)])])])},k=[],A=(n("6b54"),{data:function(){return{mrow:{},atable:{},resultsPerPage:25,currentPage:1,qsearch:""}},created:function(){console.log(this.atable)},methods:{},pouch:{mainlists2:function(){},atable:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){return{database:"maindb",selector:{rtype:"mlist",_id:{$regex:this.qsearch}},sort:[{_id:"desc"}],limit:this.resultsPerPage}})}}),$=A,N=(n("61a8"),Object(c["a"])($,P,k,!1,null,"e1e7a796",null)),E=N.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"atable"},[n("div",{staticClass:"svdiv"}),n("h4",[t._v("Edit")]),n("form",{on:{submit:function(e){return e.preventDefault(),t.update_mrow(e)}}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-11"},[n("div",{staticClass:"form-group"},[n("label",[t._v(" Title: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.atable.title,expression:"atable.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.atable.title},on:{input:function(e){e.target.composing||t.$set(t.atable,"title",e.target.value)}}})])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-11"},[n("div",{staticClass:"form-group"},[n("label",[t._v("Body: ")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.atable.body,expression:"atable.body"}],staticClass:"form-control",attrs:{rows:"4"},domProps:{value:t.atable.body},on:{input:function(e){e.target.composing||t.$set(t.atable,"body",e.target.value)}}})])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-11"},[n("div",{staticClass:"form-group"},[n("label",[t._v("Statusfld:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.atable.statusfld,expression:"atable.statusfld"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.atable.statusfld},on:{input:function(e){e.target.composing||t.$set(t.atable,"statusfld",e.target.value)}}})])])]),n("br"),n("div",{staticClass:"form-group"},[n("button",{staticClass:"btn btn-primary"},[t._v("Update")]),n("button",{staticClass:"btn btn-danger float-right",on:{click:function(e){return e.preventDefault(),t.delete_mrow(t.mrow._id)}}},[t._v("\n        Delete\n      ")])])])])},j=[],D={data:function(){return{mrow:{},atable:{}}},created_api:function(){},methods:{updatePost_api:function(){},update_mrow:function(){var t=this;this.$pouch.put("maindb",this.atable).then(function(){t.$router.push({name:"posts"})})},delete_mrow:function(){var t=this,e=confirm("Are you sure you want to delete?");1==e&&this.$pouch.remove("maindb",{_id:this.$route.params.id,_rev:this.atable._rev}).then(function(){t.$router.push({name:"posts"})})},confirm:function(){this.$refs.confirm.open("Delete","Are you sure?",{color:"red"}).then(function(t){})}},pouch:{atable:function(){return{database:"maindb",selector:{_id:this.$route.params.id},first:!0}}}},T=D,L=Object(c["a"])(T,O,j,!1,null,null,null),q=L.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"maindb"},[n("br"),n("div",[t._v("Add new items here..")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.arow.name,expression:"arow.name"}],attrs:{id:"dginput",placeholder:"...Enter New... "},domProps:{value:t.arow.name},on:{input:function(e){e.target.composing||t.$set(t.arow,"name",e.target.value)}}}),n("button",{attrs:{id:"dgbutton"},on:{click:t.addrow}},[t._v("Save `Statusfield'")]),n("div",[t._v("\n    Click on an item below to edit it. Click outside that box to finish (like\n    a spreadsheet).\n  ")]),t._l(t.maindb,function(e){return n("div",[n("div",{staticClass:"svdiv"}),n("button",{attrs:{id:"dgbutton"},on:{click:function(n){t.delconfm=t.confirmdel(),1==t.delconfm&&t.$pouch.remove("maindb",e)}}},[t._v("\n      Delete\n    ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"arow.name"}],attrs:{id:"dginput"},domProps:{value:e.name},on:{change:function(n){t.$pouch.put("maindb",e)},input:function(n){n.target.composing||t.$set(e,"name",n.target.value)}}}),t._v("\n    "+t._s(e._id)+", "+t._s(e.updatedat)+",\n  ")])})],2)},M=[],U=(n("7f7f"),n("6275")),F={data:function(){return{arow:{},resultsPerPage:125,currentPage:1,qsearch:"",delconfm:null,updatedat:null,statusflds_x:[]}},methods:{addrow:function(){var t=U.iuid();this.$pouch.post("maindb",{name:this.arow.name,rtype:"statusfld_type",updatedat:U.updatedat(),_id:t}),this.arow.name=""},editrow:function(){this.$pouch.put("maindb",{name:this.arow.name,rtype:"statusfld_type",updatedat:U.updatedat(),_id:this.arow._id,_rev:this.arow._rev})},confirmdel:function(){var t=confirm("Are you sure you want to delete?");return t}},pouch:{maindb:function(){return{selector:{rtype:"statusfld_type"},sort:[{name:"asc"}],limit:this.resultsPerPage}}}},R=F,V=(n("2a76"),Object(c["a"])(R,B,M,!1,null,"67c64738",null)),H=V.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"localaapp"},[n("v-app",{attrs:{id:"inspire"}},[n("v-container",{attrs:{id:"input-usage","grid-list-xl":"",fluid:""}},[n("div",{attrs:{id:"dgdivright",align:"right"}},[t._v(" dg-v06 ")]),"settings"==t.mode?n("v-card",[n("v-card-title",[t._v("Settings")]),n("v-card-text",[t._v('\n          You can sync your data to a remote Apache CouchDB, IBM Cloudant or PouchDB server. Supply the URL, including\n          credentials and database name and click "Start Sync".\n\n          '),n("div",[t._v(" ")]),n("div",[t._v("URL first part")]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.syncpartA,expression:"syncpartA"}],attrs:{id:"dginput",type:"url"},domProps:{value:t.syncpartA},on:{input:function(e){e.target.composing||(t.syncpartA=e.target.value)}}})]),n("div",{staticClass:"sm-vert-div"}),n("div",[t._v("Password")]),n("div",["checkbox"===t.passwordFieldType?n("input",{directives:[{name:"model",rawName:"v-model",value:t.syncpass,expression:"syncpass"}],attrs:{id:"dginput",type:"checkbox"},domProps:{checked:Array.isArray(t.syncpass)?t._i(t.syncpass,null)>-1:t.syncpass},on:{change:function(e){var n=t.syncpass,s=e.target,a=!!s.checked;if(Array.isArray(n)){var i=null,r=t._i(n,i);s.checked?r<0&&(t.syncpass=n.concat([i])):r>-1&&(t.syncpass=n.slice(0,r).concat(n.slice(r+1)))}else t.syncpass=a}}}):"radio"===t.passwordFieldType?n("input",{directives:[{name:"model",rawName:"v-model",value:t.syncpass,expression:"syncpass"}],attrs:{id:"dginput",type:"radio"},domProps:{checked:t._q(t.syncpass,null)},on:{change:function(e){t.syncpass=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.syncpass,expression:"syncpass"}],attrs:{id:"dginput",type:t.passwordFieldType},domProps:{value:t.syncpass},on:{input:function(e){e.target.composing||(t.syncpass=e.target.value)}}}),n("button",{attrs:{type:"password",id:"dgbutton"},on:{click:t.switchVisibility}},[t._v("Show/hide")])]),n("div",[t._v("URL last part")]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.syncpartC,expression:"syncpartC"}],attrs:{id:"dginput",type:"text"},domProps:{value:t.syncpartC},on:{input:function(e){e.target.composing||(t.syncpartC=e.target.value)}}})]),n("div",[t._v(" ")]),t._v("\n          example...   http://user:pass@localhost:5984/list\n          "),n("div",[t._v(" ")]),n("h4",[t._v("Sync Status")]),"notsyncing"==t.syncStatus?n("v-chip",[t._v("Not Syncing")]):t._e(),"syncing"==t.syncStatus?n("v-chip",{attrs:{color:"info"}},[t._v("Syncing")]):t._e(),"syncerror"==t.syncStatus?n("v-chip",{attrs:{color:"error"}},[t._v("Sync Error")]):t._e(),t._v("\n           "+t._s(t.syncURL)+" _ "+t._s(t.syncpasszz)+" , "+t._s(t.syncpartA)+" _***_ "+t._s(t.syncpartC)+"\n        ")],1),n("v-card-actions",[n("v-btn",{on:{click:t.onClickStartSync}},[t._v("  Start Sync\n          ")])],1)],1):t._e()],1)],1)],1)},I=[],z=(n("4917"),n("d6e1")),J=new z["a"]("maindb"),Z={data:function(){return{e:null,passwordFieldType:"password",arow:{},syncurla:{},resultsPerPage:99,snksnackbar:!1,snktimeout:4200,snktext:"Couchdb sync info",couchurl:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_synccouchurl,couchurl2:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_synccouchurl_2,mode:"settings",syncURL:"",syncpartA:"",syncpass:"",syncpartC:"",syncStatus:"notsyncing"}},created:function(){var t=this;J.get("_local/user").then(function(e){t.syncpartA=e.syncpartA,t.syncpass=e.syncpass,t.syncpartC=e.syncpartC,t.startSync()}).catch(function(t){})},methods:{switchVisibility:function(){this.passwordFieldType="password"===this.passwordFieldType?"text":"password"},saveLocalDoc:function(t){return J.get(t._id).then(function(e){return t._rev=e._rev,J.put(t)}).catch(function(e){return J.put(t)})},onClickStartSync:function(){var t=this,e={_id:"_local/user",syncpartA:this.syncpartA,syncpass:this.syncpass,syncpartC:this.syncpartC};this.saveLocalDoc(e).then(function(){t.startSync()})},startSync:function(){var t=this;this.syncStatus="notsyncing",this.sync&&(this.sync.cancel(),this.sync=null),this.syncpartA.concat(this.syncpass).concat(this.syncpartC)&&(this.syncStatus="syncing",this.sync=J.sync(this.syncpartA.concat(this.syncpass).concat(this.syncpartC),{live:!0,retry:!0}).on("change",function(e){if("pull"==e.direction&&e.change&&e.change.docs)for(var n in e.change.docs){var a=e.change.docs[n],i=null;if(a._id.match(/^item/))i=t.shoppingListItems;else{if(!a._id.match(/^list/))continue;i=t.shoppingLists}var r=t.findDoc(i,a._id);r.doc?1==a._deleted?i.splice(r.i,1):(delete a._revisions,s["default"].set(i,r.i,a)):a._deleted||i.unshift(a)}}).on("error",function(e){t.syncStatus="syncerror"}).on("denied",function(e){t.syncStatus="syncerror"}).on("paused",function(e){e&&(t.syncStatus="syncerror")}))}},pouch:{localaapp:function(){return{database:"maindb",selector:{},first:!0}}}},W=Z,G=(n("5969"),Object(c["a"])(W,Y,I,!1,null,"2d492b56",null)),K=G.exports;s["default"].use(d["a"]);var Q=new d["a"]({mode:"history",base:"/",routes:[{name:"home",path:"/",component:y},{name:"create",path:"/create",component:x},{name:"posts",path:"/posts",component:E},{name:"edit",path:"/edit/:id",component:q},{path:"/statusfield",component:H},{path:"/settings",component:K}]}),X=n("2f62");s["default"].use(X["a"]);var tt=new X["a"].Store({state:{},mutations:{},actions:{}}),et=n("9483");Object(et["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("ab8b");var nt=n("ce5b"),st=n.n(nt),at=(n("bf40"),n("5d16")),it=n("4833"),rt=n.n(it);s["default"].config.productionTip=!1,n("ed18").config(),s["default"].use(st.a,{theme:{}}),z["a"].plugin(at["a"]),z["a"].plugin(rt.a),s["default"].use(n("1629"),{pouch:z["a"],defaultDB:"config"}),new s["default"]({router:Q,store:tt,render:function(t){return t(u)}}).$mount("#app")},5969:function(t,e,n){"use strict";var s=n("f743"),a=n.n(s);a.a},"61a8":function(t,e,n){"use strict";var s=n("d55a"),a=n.n(s);a.a},"61de":function(t,e,n){},6275:function(t,e,n){"use strict";n.r(e),n.d(e,"iuid",function(){return o}),n.d(e,"updatedat",function(){return c});var s=n("e814"),a=n.n(s),i=n("5a0c"),r=n.n(i);function o(){var t=r()().format("YYMMDD_HHmm.ss.SSSZZ-").concat(a()(1e4*Math.random()));return t}function c(){var t=r()().format("YYMMDD_HH.mm.ss");return t}},"64a9":function(t,e,n){},a239:function(t,e,n){},d55a:function(t,e,n){},f743:function(t,e,n){}});
//# sourceMappingURL=app.6e0b29f7.js.map