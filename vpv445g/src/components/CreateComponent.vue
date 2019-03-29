<template>
  <div>
    <div class="svdiv"></div>
    <h5>Create</h5>
    <v-app id="inspire_cr">
      <form @submit.prevent="add_mrow">
        <div class="row">
          <div class="col-md-11">
            <div class="form-group">
              <label>Title:</label>
              <input type="text" class="form-control" v-model="mrow.title" />
            </div>
          </div>
        </div>

      <v-textarea
        name="input-7-1"
        solo
        label="Body"
        auto-grow
        v-model="mrow.body"
      ></v-textarea>
       
        <v-card>
          <v-autocomplete
            v-model="mrow.statusfld"
            label="Statusfield"
            :items="statusflds"
            item-text="name"
            :persistent-hint="true"
            color="blue"
            :multiple="true"
          >
          </v-autocomplete>
        </v-card>
        <br />

        <div class="form-group">
          <button class="btn btn-primary">Create</button>
        </div>
      </form>
    </v-app>
  </div>
</template>

<script>
var dghelper = require(".././helper.js");

// var statusflds = [{ name: "" }];

export default {
  data() {
    return {
      mrow: {},
      resultsPerPage: 25,
      currentPage: 1,
      qsearch: "190221_2046",
      statusflds: [],
      statusnames: [],
      atable: {}
    };
  },

  created: function() {
    // create database index on 'rtype'
    // this.$pouch
    //   .createIndex("maindb", { index: { fields: ["rtype"] } })
    //   .then(() => {
    //     // load all 'status' items
    //     var q = ("maindb",
    //     {
    //       selector: {
    //         rtype: "statusfld_type"
    //       },
    //       fields: ["name"]
    //     });
    //     return this.$pouch.find(q);
    //   })
    //   .then(data => {
    //     // write the data to the Vue model, and from there the web page
    //     this.statusflds2 = data.docs;
    //   });
    // console.log(this.statusflds, data.docs);
    // extract values for one key and place in array..
    // https://stackoverflow.com/questions/19590865/from-an-array-of-objects-extract-value-of-a-property-as-array/42059484
    // let statusnames = statusflds.map(a => a.name);
    // console.log("snames - ", this.statusnames);
  },
  methods: {
    addPost_api() {
      //let uri = "http://192.168.88.58:4000/posts/add";
      // let uri = "http://localhost:4000/posts/add";
      // this.axios.post(uri, this.post).then(() => {
      //   this.$router.push({ name: "posts" });
      // });
      console.log(this.post);
    },

    add_mrow: function() {
      var viuid = dghelper.iuid();

      console.log("viuid= ", viuid);
      console.log(this.mrow);
      this.$pouch
        .post("maindb", {
          title: this.mrow.title,
          body: this.mrow.body,
          statusfld: this.mrow.statusfld,
          rtype: "mlist",
          _id: viuid
        })
        .then(() => {
          this.$router.push({ name: "posts" });
        });
    },
    noop() {
      window.alert("noop");
    }
  },

  // Use the pouch property to configure the component to (reactively) read data from pouchdb.
  pouch: {
    // simple selector.  I put i here to prevent post undefined error?
    atable: function() {
      return {
        //database: this.selectedDatabase, // you can pass a database string or a pouchdb instance
        database: "maindb",
        selector: {},
        limit: this.resultsPerPage
      };
    },
    statusflds: function() {
      return {
        //database: this.selectedDatabase, // you can pass a database string or a pouchdb instance
        database: "maindb",
        selector: { rtype: "statusfld_type" },
        sort: [{ name: "asc" }],
        include_docs: "false",
        fields: ["name"],
        limit: 3456
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.md-autocomplete + strong {
  margin-top: 1px;
  display: block;
}
</style>
