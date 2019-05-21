import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;

// typeof module.exports !== 'undefined'

import "bootstrap/dist/css/bootstrap.min.css";

require("dotenv").config();

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

var VueTruncate = require("vue-truncate-filter");
Vue.use(VueTruncate);

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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
