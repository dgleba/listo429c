//  
//  dg-version-vpv445_v01
//  2019-03-04_Mon_08.12-AM
// 

// typeof module.exports !== 'undefined'
import Vue from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";

require('dotenv').config();


import Vuetify from "vuetify";
import colors from "vuetify/es5/util/colors";
Vue.use(Vuetify, {
  theme: {}
});
// index.js or main.js
import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader

// vue material autocomplete has bugs. switch to vuetify.2019-03-01
// import VueMaterial from "vue-material";
// import "vue-material/dist/vue-material.min.css";
// Vue.use(VueMaterial);

import VueRouter from "vue-router";
Vue.use(VueRouter);

import VueAxios from "vue-axios";
import axios from "axios";

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

import PouchDB from "pouchdb-browser";
import lf from "pouchdb-find";
import plf from "pouchdb-live-find";
PouchDB.plugin(lf);
PouchDB.plugin(plf);
// PouchDB.plugin(require("pouchdb-find"));
// PouchDB.plugin(require("pouchdb-live-find"));
// PouchDB.plugin(require("pouchdb-authentication"));

// vue-pouch is for Buhrmi's package. pouch-vue is for MDSLKTR'S
// https://github.com/MDSLKTR/pouch-vue
// https://github.com/buhrmi/vue-pouch
// Vue.use(require("vue-pouch"), {
Vue.use(require("pouch-vue"), {
  // Vue.use(require("vue-pouch"), {
  pouch: PouchDB,
  defaultDB: "config"
});

// Vue.use("pouchVue", {
//   pouch: PouchDB, // optional if `PouchDB` is available on the global object
//   defaultDB: "remoteDbName", // this is used as a default connect/disconnect database
//   debug: "*" // optional - See `https://pouchdb.com/api.html#debug_mode` for valid settings
// });

import HomeComponent from "./components/HomeComponent.vue";
import CreateComponent from "./components/CreateComponent.vue";
import IndexComponent from "./components/IndexComponent.vue";
import EditComponent from "./components/EditComponent.vue";

import statusfield from "./components/statusfield.vue";
import appsettings from "./components/appsettings.vue";

// let id = null;
// let _id = null;

const routes = [
  {
    name: "home",
    path: "/",
    component: HomeComponent
  },
  {
    name: "create",
    path: "/create",
    component: CreateComponent
  },
  {
    name: "posts",
    path: "/posts",
    component: IndexComponent
  },
  {
    name: "edit",
    path: "/edit/:id",
    component: EditComponent
  },
  {
    path: "/statusfield",
    component: statusfield
  },
  {
    path: "/settings",
    component: appsettings
  }
];

const router = new VueRouter({ mode: "history", routes: routes });

new Vue(Vue.util.extend({ router }, App)).$mount("#app");
