<template>
  <div>
    <div class="svdiv"></div>
    <h3>Create</h3>
    <form @submit.prevent="add_mrow">
      <div class="row">
        <div class="col-md-11">
          <div class="form-group">
            <label>Title:</label>
            <input type="text" class="form-control" v-model="mrow.name" />
          </div>
        </div>
      </div>
      <br />

      <div class="form-group">
        <button class="btn btn-primary">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
var dghelper = require(".././helper.js");

export default {
  data: () => ({
    mrow: {},
    resultsPerPage: 25,
    currentPage: 1,
    qsearch: "190221_2046",
    statusflds_x: []
  }),

  methods: {
    add_mrow: function() {
      var viuid = dghelper.iuid();

      console.log("viuid= ", viuid);
      console.log(this.mrow);
      this.$pouch
        .post("maindb", {
          name: this.mrow.name,
          rtype: "statusfld_type",
          _id: viuid
        })
        .then(() => {
          this.$router.push({ name: "posts" });
        });
    }
  },

  // Use the pouch property to configure the component to (reactively) read data from pouchdb.
  pouch: {
    // simple selector.  I put i here to prevent post undefined error?
    maindb: function() {
      return {
        //database: this.selectedDatabase, // you can pass a database string or a pouchdb instance
        selector: { rtype: "statusfld_type" },
        limit: this.resultsPerPage
      };
    }
  }
};
</script>
