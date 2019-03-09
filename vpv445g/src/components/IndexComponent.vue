<template>
  <v-app id="inspireindex">
  <div class="atable">
    <div class="svdiv"></div>
    <div class="row">
      <div class="col-md-3">
        <router-link :to="{ name: 'create' }" class="btn btn-success"
          >Create
        </router-link>
      </div>
      <div class="col-md-9">
      <v-input> </v-input>
        Search main-table -- contains  <input id="dginput" v-model="qsearch" />
       
      </div>
    </div>

    <table class="table table-hover ">
      <thead>
        <tr>
          <th>Actions</th>
          <th>Title</th>
          <th>Body</th>
          <th>_id</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="mrow in atable" :key="mrow._id">
          <router-link
            :to="{ name: 'edit', params: { id: mrow._id } }"
            class="btn btn-primary"
            >Edit</router-link
          >

          <td>{{ mrow.title }}</td>
          <td>{{ mrow.body }}</td>
          <td>{{ mrow._id }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  </v-app id="inspireindex">
</template>

<script>
export default {
  data() {
    return {
      mrow: {},
      atable: {},
      resultsPerPage: 25,
      currentPage: 1,
      qsearch: ""
    };
  },
  created() {
    //
    // not using this for pouchdb David Gleba 2019-02-22_Fri_16.26-PM
    //
    // let uri = "http://localhost:4000/posts";
    // this.axios.get(uri).then(response => {
    //   this.posts = response.data;
    // });
    console.log(this.atable);
    
    },

  methods: {},

  // Use the pouch property to configure the component to (reactively) read data from pouchdb.
  pouch: {
    // The function returns a Mango-like selector that is run against the `mainlists` database.
    // The result of the query is assigned to the `mainlists` property.
    mainlists2: function() {
      // if (this.age === this.qsearch) return;
      // return { age: this.age, type: "mlist" };
    },
    // You can also specify the database dynamically (local or remote), as well as limits, skip and sort order:
    atable: function() {
      return {
        //database: this.selectedDatabase, // you can pass a database string or a pouchdb instance
        database: "maindb",
        selector: { rtype: "mlist", _id: { $regex: this.qsearch } },
        sort: [{ _id: "desc" }],
        limit: this.resultsPerPage
      };
      console.log(atable);
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
  background-color: hsl(90, 16%, 91%);
}
</style>
