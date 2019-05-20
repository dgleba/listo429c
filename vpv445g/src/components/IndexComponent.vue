<template>
  <v-app>
    <div class="atable">
      
      <div class="sm-vert-div">&nbsp;</div>
      <div class="row col-lg-12">
        <div class=" col-lg-12">
            <div class="input-group col-xs-11 col-sm-8 col-md-6 col-lg-4">
                    <span class="input-group-btn">
                <router-link :to="{ name: 'create' }" class="btn btn-success">Create</router-link>
              </span>&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="text" class="form-control"  v-model="qsearch" placeholder="Search ..">
            </div><!-- /input-group -->
        </div><!-- /.col-  -->
      </div>
      <div class="sm-vert-div">&nbsp;</div>

      <table class="table table-hover table-condensed table-responsive" >

        <tbody>
          <tr v-for="mrow in atable" :key="mrow._id">
            <router-link
              :to="{ name: 'edit', params: { id: mrow._id } }"
              class="btn btn-primary "
            >Edit</router-link>
            <td style="overflow: hidden;">{{ mrow.title  | truncate(50, ' ..') }} | {{ mrow.body | truncate(70, ' ..') }}</td>

            <td >{{ mrow.createdat | dateformat2() }}</td> 
            <!-- <td>{{ mrow._id | truncate(6, '') }}</td> -->
          </tr>
        </tbody>
      </table>
    </div>
  </v-app>
</template>

<script>
import dayjs from "dayjs";


export default {
  data() {
    return {
      mrow: {},
      atable: {},
      resultsPerPage: 50,
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

  filters: {
    // Truncate text in template.. https://stackoverflow.com/questions/35070271/vue-js-components-how-to-truncate-the-text-in-the-slot-element-in-a-component
    truncate: function(text, length, suffix) {
      text = text || "."; // ref. https://github.com/imcvampire/vue-truncate-filter/issues/10 - fails on null
      return text.substring(0, length) + suffix;
    },
    // format date
    dateformat2: function(input) {
      if (input) {
         return  dayjs(String(input)).format('ddd_MMM_DD HH:mm');
      }
    }
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
        // selector: { rtype: "mlist", _id: { $regex: this.qsearch } },
        selector: {
          rtype: "mlist",
          $or: [
            { body: { $regex: RegExp(this.qsearch, "i") } },
            { title: { $regex: RegExp(this.qsearch, "i") } },
            { statusfld: { $regex: RegExp(this.qsearch, "i") } },
            { _id: { $regex: this.qsearch } }
          
          ]
        },
        sort: [{ _id: "desc" }],
        limit: this.resultsPerPage
      };
      console.log(atable);
    }
  }
};

/*    
notes.

1.
<td>{{ mrow.statusfld }}</td>

2.
https://stackoverflow.com/questions/25385289/how-to-set-the-size-of-a-column-in-a-bootstrap-responsive-table

            <td class="col-md-5-and-down" style="overflow: hidden;">{{ mrow.title  | truncate(50, ' ..') }} || {{ mrow.body | truncate(80, ' ..') }}</td>


*/

</script>

<style scoped>
/* <!--  // small height div to create a small vertical spacing --> */
.svdiv,
.sm-vert-div {
  height: 14px;
  width: 50%;
  /* background-color: powderblue; */
}
/* <!--  // make the input box more visible -->
// background-color: hsl(192, 6%, 93%) ;
 */
#dginput {
  color: black;
  background-color: hsl(90, 16%, 91%);
}
</style>
