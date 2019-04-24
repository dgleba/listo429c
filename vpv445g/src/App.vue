<template>
  <div class="container-fluid">
    <v-app id="inspire">
      <v-toolbar>
        <v-toolbar-title>App&nbsp;</v-toolbar-title>

        <v-menu class="hidden-md-and-up">
          <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
          <v-list>
            <v-list-tile
              v-for="item in menu"
              :key="item.icon"
              :to="item.link"
              flat
              @click="settingshow=''"
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-btn @click="settingshow='on'">Settings</v-btn>
            <v-btn v-show="settingshow" @click="settingshow=''">Close Settings</v-btn>
          </v-list>
        </v-menu>

        <v-toolbar-items class="hidden-xs-and-down">
          <v-btn v-for="item in menu" :key="item.icon" :to="item.link" flat @click="settingshow=''">
            {{
            item.title
            }}
          </v-btn>

          <v-btn flat @click="settingshow='on'">Settings</v-btn>
          <v-btn v-show="settingshow" @click="settingshow=''">Close Settings</v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <!-- settings section -->
      <div v-show="settingshow" class="panel panel-default">
        <div class="localaapp">
          <!-- settings -->
          <div id="dgdivright" align="right">{{dgversion}}</div>
          <v-card v-if="mode == 'settings'">
            <v-card-title>
              Settings
              <v-btn v-show="settingshow" @click="settingshow=''">Close Settings</v-btn>
            </v-card-title>
            <v-card-text>
              You can sync your data to a remote Apache CouchDB, IBM Cloudant or PouchDB server. Supply the URL, including
              credentials and database name and click "Start Sync".
              <!-- Cloudant URL -->

              <div>&nbsp;</div>Example... http://user:pw@localhost:5984/listdb
              <div class="sm-vert-div">&nbsp;</div>Example... https://user:pw@couch.dg.tk/posts-db
              <div class="sm-vert-div">&nbsp;</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp; pw will be replaced with your password</div>
              <div class="sm-vert-div">&nbsp;</div>

              <!-- <div>&nbsp;&nbsp;&nbsp;&nbsp; password... password</div>

              <div>&nbsp;&nbsp;&nbsp;&nbsp; Last part. (host,port,database).. @couchdb.e29.com/listdb</div>-->

              <div>&nbsp;</div>
              <div>URL ('pw' will be replaced by the password you enter below)</div>
              <div>
                <input id="dginput" type="url" v-model="syncpartA">
              </div>
              <div class="sm-vert-div"></div>
              <div>Password</div>
              <div>
                <input id="dginput" :type="passwordFieldType" v-model="syncpass">
                <button type="password" @click="switchVisibility" id="dgbutton">Show/hide</button>
              </div>

              <!-- <div>URL last part</div>
            <div>
              <input id="dginput" type="text" v-model="syncpartC">
              </div>-->

              <div class="sm-vert-div">&nbsp;</div>
              <h4>Sync Status</h4>

              <!-- visualisation of sync status -->
              <v-chip v-if="syncStatus == 'notsyncing'">Not Syncing</v-chip>
              <v-chip v-if="syncStatus == 'syncing'" color="info">Syncing</v-chip>
              <v-chip v-if="syncStatus == 'syncerror'" color="error">Sync Error</v-chip>
              <!-- url:  {{ syncURL }} , Abc:  {{ syncpartA }}  _***_ {{ syncpartC }} -->
              You entered: {{ syncpartA }}
            </v-card-text>

            <v-card-actions>
              <!-- submit btn that saves the Cloudant URL -->
              <v-btn v-on:click="onClickStartSync">Start Sync</v-btn>
              <v-btn v-show="settingshow" @click="settingshow=''">Close Settings</v-btn>
            </v-card-actions>
          </v-card>
          <!-- settings -->
        </div>
        <div>
          <div v-for="n in 7">&nbsp;</div>
        </div>
      </div>

      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
//var dghelper = require(".././helper.js");
import Vue from "vue";
import PouchDB from "pouchdb-browser";

// this will be the PouchDB settings database
var db = new PouchDB("maindb");

export default {
  data() {
    return {
      dgversion: "vpv445g. version 24 - 19/4/24",
      settingshow: "",
      aset: "asetting",
      passwordFieldType: "password",
      mode: "settings",
      syncURL: "",
      syncpartA: "",
      syncpass: "",
      syncpartC: "xpartcx",
      syncStatus: "notsyncing",
      menu: [
        { icon: "a", title: "Posts", link: "/" },
        { title: "StatusTag", link: "/statusfield" },
        { icon: "home", title: "Help", link: "/home" }
      ]
    };
  },
  mounted: function() {
    // try to kick off sync 2019-04-01..
    db.get("_local/user")
      .then(data => {
        // if we have settings, start syncing
        this.syncpartA = data.syncpartA;
        this.syncpass = data.syncpass;
        this.syncpartC = data.syncpartC;
        this.startSync();
        console.log(" Mounted startsync. ");
      })
      .catch(e => {});
  },
  created: function() {
    //this.syncURL = (this.syncpartA).concat(this.syncpass).concat(this.syncpartC);
    // load settings (Cloudant sync URL)
    db.get("_local/user")
      .then(data => {
        // if we have settings, start syncing
        this.syncpartA = data.syncpartA;
        this.syncpass = data.syncpass;
        this.syncpartC = data.syncpartC;
        // commented out 2019-04-08 11:31AM to see if mounted is adeqate to start sync on app open.
        //this.startSync();
      })
      .catch(e => {});
  },
  methods: {
    menuItems() {
      // add this 2019-03-31 11:27AM to see if it will kick off sync on menu press
      // commented out 2019-04-08 to see if the mounted is adequate.
      // this.startSync();
      return this.menu;
    },
    // https://simedia.tech/blog/show-hide-password-input-values-with-vue-js/
    switchVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },

    /**
     * Saves 'doc' to PouchDB. It first checks whether that doc
     * exists in the database. If it does, it overwrites it - if
     * it doesn't, it just writes it.
     * @param {Object} doc
     * @returns {Promise}
     */
    saveLocalDoc: function(doc) {
      return db
        .get(doc._id)
        .then(data => {
          doc._rev = data._rev;
          return db.put(doc);
        })
        .catch(e => {
          return db.put(doc);
        });
    },
    /**
     * Called when save button on the settings panel is clicked. The
     * Cloudant sync URL is saved in PouchDB and the sync process starts.
     */
    onClickStartSync: function() {
      //this.syncURL = (this.syncpartA).concat(this.syncpass).concat(this.syncpartC);
      var obj = {
        _id: "_local/user",
        syncpartA: this.syncpartA,
        syncpass: this.syncpass,
        syncpartC: this.syncpartC
      };
      this.saveLocalDoc(obj).then(() => {
        this.startSync();
      });
    },

    /**
     * Called when the sync process is to start. Initiates a PouchDB to
     * to Cloudant two-way sync and listens to the changes coming in
     * from the Cloudant feed. We need to monitor the incoming change
     * so that the Vue.js model is kept in sync.
     */
    startSync: function() {
      this.syncStatus = "notsyncing";

      // replace password into the url
      var vsyncURL = this.syncpartA;
      this.syncURL = vsyncURL.replace(":pw", ":" + this.syncpass);
      console.log(
        "startsync. vsyncurl: ",
        vsyncURL,
        ", thissyncurl: ",
        this.syncURL
      );

      if (this.sync) {
        this.sync.cancel();
        this.sync = null;
      }
      // if (!this.syncpartA.concat(this.syncpass).concat(this.syncpartC)) {
      if (!this.syncURL) {
        return;
      }
      this.syncStatus = "syncing";
      this.sync = db
        .sync(this.syncURL, {
          live: true,
          retry: true
        })
        .on("change", info => {
          // handle change
          // if this is an incoming change
          if (info.direction == "pull" && info.change && info.change.docs) {
            // loop through all the changes
            for (var i in info.change.docs) {
              var change = info.change.docs[i];
              var arr = null;

              // see if it's an incoming item or list or something else
              if (change._id.match(/^item/)) {
                arr = this.shoppingListItems;
              } else if (change._id.match(/^list/)) {
                arr = this.shoppingLists;
              } else {
                continue;
              }
              // locate the doc in our existing arrays
              var match = this.findDoc(arr, change._id);
              // if we have it already
              if (match.doc) {
                // and it's a deletion
                if (change._deleted == true) {
                  // remove it
                  arr.splice(match.i, 1);
                } else {
                  // modify it
                  delete change._revisions;
                  Vue.set(arr, match.i, change);
                }
              } else {
                // add it
                if (!change._deleted) {
                  arr.unshift(change);
                }
              }
            }
          }
        })
        .on("error", e => {
          this.syncStatus = "syncerror";
        })
        .on("denied", e => {
          this.syncStatus = "syncerror";
        })
        .on("paused", e => {
          if (e) {
            this.syncStatus = "syncerror";
          }
        });
    }
  },

  // VuePouch adds a `pouch` config option to all components.
  // Use the pouch property to configure the component to (reactively) read data from pouchdb.
  pouch: {
    // simple selector.  I put i here to prevent post undefined error?
    localaapp: function() {
      return {
        //database: this.selectedDatabase, // you can pass a database string or a pouchdb instance
        database: "maindb",
        selector: {},
        first: true
      };
    }
  }
  // end default
};
</script>

<style scoped>
/* <!--  // small height div to create a small vertical spacing --> */
.svdiv,
.sm-vert-div {
  height: 7px;
  width: 50%;
  /* background-color: powderblue; */
}

/* <!--  // make the input box more visible -->
   background-color: hsl(192, 6%, 93%) ;
*/
#dginput {
  color: black;
  background-color: hsl(80, 12%, 91%);
  margin: 2px;
  width: 80%;
}
#dgbutton {
  background-color: hsl(190, 26%, 91%);
  padding: 4px;
  margin: 4px;
}
</style>