<template>
  <v-app>
    <v-container fluid>
    <v-layout row>
      <v-flex > 
     <span> <router-link :to="{ name: 'create' }" class="v-btn small primary "  >Create</router-link> </span>
       </v-flex >
     <v-flex >
       <v-text-field
        flat solo-inverted small
        hide-details    prepend-inner-icon="search"
        label="Search"  class="hidden-xs-and-down"
        v-model="qsearch" 
      ></v-text-field>
    </v-flex >  
    </v-layout >

   <div class="atable"> 

    <v-layout row>
      <v-flex >
        <v-card>
          <v-list two-line>        
            <v-list-tile  v-for="mrow in atable" :key="mrow._id"    
                :to="{ name: 'edit', params: { id: mrow._id } }"  >

              <v-list-tile-content>
                <v-list-tile-title> {{ mrow.title | truncate(410, '') }}         </v-list-tile-title>
                <v-list-tile-sub-title > {{ mrow.body | truncate(410, ' ..') }} </v-list-tile-sub-title> 
                <v-list-tile-sub-title class="text-xs-right" >{{ mrow.createdat | dateformat2() }} </v-list-tile-sub-title> 
              </v-list-tile-content> 

            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
            
    </div>
  </v-container>
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

3.
https://stackoverflow.com/questions/47586022/router-link-with-vue-and-vuetify-confusion

4.
                <v-list-tile-sub-title class="text-xs-right" >{{ mrow.createdat | dateformat2() }} </v-list-tile-sub-title> 


5.
         <table class="table table-hover table-condensed table-borderd " >
          <tr v-for="mrow in atable" :key="mrow._id">
            <router-link
              :to="{ name: 'edit', params: { id: mrow._id } }"
              class="v-btn small"
            >Edit</router-link>
            <td style="overflow: hidden;">{{ mrow.title  | truncate(50, ' ..') }} | {{ mrow.body | truncate(70, ' ..') }}</td>

            <td >{{ mrow.createdat | dateformat2() }}</td> 
            <!-- <td>{{ mrow._id | truncate(6, '') }}</td> -->
          </tr>
       </table>

6.

   <v-divider > - </v-divider> 

7.
                <v-list-tile-action>
                  <v-list-tile-action-text>{{ mrow.createdat | dateformat2() }}</v-list-tile-action-text>
                </v-list-tile-action>

8.

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
