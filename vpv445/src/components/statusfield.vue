<template>
  <div class="maindb">
    <br />
    <div>Add new items here..</div>
    <input id="dginput" v-model="arow.name" placeholder="...Enter New... " />
    <button id="dgbutton" @click="addrow">Save `Statusfield'</button>
    <div>
      Click on an item below to edit it. Click outside that box to finish (like
      a spreadsheet).
    </div>
    <div v-for="arow in maindb">
      <div class="svdiv"></div>
      <button
        id="dgbutton"
        @click="
          delconfm = confirmdel();
          if (delconfm == true) {
            $pouch.remove('maindb', arow);
          }
        "
      >
        Delete
      </button>

      <input
        id="dginput"
        v-model="arow.name"
        @change="
          // arow.updatedat = this.dghelper.updatedat(); // TypeError: Cannot read property 'updatedat' of undefined
          $pouch.put('maindb', arow);
        "
      />
      {{ arow._id }}, {{ arow.updatedat }},
    </div>
  </div>
</template>

<script>
var dghelper = require(".././helper.js");

export default {
  data: () => ({
    arow: {},
    resultsPerPage: 125,
    currentPage: 1,
    qsearch: "",
    delconfm: null,
    updatedat: null,
    statusflds_x: []
  }),
  methods: {
    addrow: function() {
      var viuid = dghelper.iuid();
      this.$pouch.post("maindb", {
        name: this.arow.name,
        rtype: "statusfld_type",
        updatedat: dghelper.updatedat(),
        _id: viuid
      });
      this.arow.name = "";
    },
    //
    // see above <template> for edit and delete calls. I couldnt get it to work here in this editrow function.
    //
    editrow: function() {
      // this.$pouch.put("maindb", this.arow);
      //this.arow.updatedat = dghelper.updatedat();
      this.$pouch.put("maindb", {
        name: this.arow.name,
        rtype: "statusfld_type",
        updatedat: dghelper.updatedat(),
        _id: this.arow._id,
        _rev: this.arow._rev
      });
    },
    confirmdel: function() {
      let delconfm = confirm("Are you sure you want to delete?");
      return delconfm;
    }
  },
  // VuePouch adds a `pouch` config option to all components.
  // Use the pouch property to configure the component to (reactively) read data from pouchdb.
  pouch: {
    // simple selector.  I put i here to prevent post undefined error?
    maindb: function() {
      return {
        //database: this.selectedDatabase, // you can pass a database string or a pouchdb instance
        //database: "maindb",
        selector: { rtype: "statusfld_type" },
        sort: [{ name: "asc" }],
        limit: this.resultsPerPage
      };
    }
  }
};
</script>

<style scoped>
/* <!--  // make the input box more visible -->
// background-color: hsl(192, 6%, 93%) ;
 */
#dginput {
  color: black;
  background-color: hsl(80, 12%, 91%);
  margin: 2px;
  min-width: 20%;
}
#dgbutton {
  background-color: hsl(190, 26%, 91%);
  padding: 6px;
  margin: 5px;
}
</style>
