<template>
  <div class="atable">
    <div class="svdiv"></div>
    <!-- <h4>Edit</h4> -->
    <form @submit.prevent="update_mrow">
      <div class="row">
        <div class="col-md-11">
          <div class="form-group">
            <label> Title: </label>
            <input type="text" class="form-control" v-model="atable.title" />
          </div>
        </div>
      </div>
   
      <v-textarea
        name="input-7-1"
        solo
        label="Body"
        auto-grow
        v-model="atable.body"
      ></v-textarea>
       
        <v-card>
          <v-autocomplete
            v-model="atable.statusfld"
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
       <p class="text-sm-center">  
           Upd: {{ atable.updated | dateformat1() }} 
         --  Updat: {{ atable.updatedat  }} 
         --  Cre: {{ atable.createdat | dateformat1() }}  
         --  _id: {{ atable._id }} 
         </p>
  
      <div class="form-group">
        <button class="btn btn-primary">Update</button>
        <button
          class="btn btn-danger float-right"
          @click.prevent="delete_mrow(mrow._id);"
        >
          Delete
        </button>
      </div>
    </form>
  </div>
</template>

<script>
var dghelper = require(".././helper.js");
import dayjs from "dayjs";

export default {
  data() {
    return {
      mrow: {},
      statusflds: [],
      atable: {},
      updatedatnice: date('2019-01-01'),
    };
  },

  created_api() {
    //
    // let uri = `http://localhost:4000/posts/edit/${this.$route.params.id}`;
    // this.axios.get(uri).then(response => {
    //   this.post = response.data;
    // });
  },
  filters: {
    // format date
    dateformat1: function(input) {
      if (input) {
         return  dayjs(String(input)).format('ddd YY-MMM-DD HH:mm:ss');
      }
    }
  },
  methods: {
    updatePost_api() {
      //   let uri = `http://localhost:4000/posts/update/${this.$route.params.id}`;
      //   this.axios.post(uri, this.post).then(() => {
      //  this.$router.push({ name: "posts" });
      //   });
    },

    update_mrow: function() {
      //console.log(this.atable);
      this.atable.updatedat=dghelper.updatedat();
      this.atable.updated=new Date();
 
      this.$pouch
        .put(
          "maindb",
          this.atable
          // or update each field specifically
          // , {
          // title: this.mainlists.title,
          // body: this.mainlists.body,
          // rtype: "mlist",
          // _id: this.$route.params.id,
          // _rev: this.mainlists._rev
          // }
        )
        .then(() => {
          this.$router.push({ name: "posts" });
        });
    },
    // deletePost_api(id) {
      // let uri = `http://localhost:4000/posts/delete/${id}`;
      // this.axios.delete(uri).then(response => {
      //   this.posts.splice(this.posts.indexOf(id), 1);
      // });
    // },
    delete_mrow() {
      //console.log("to delete.. ", this.atable);
      let delconfm = confirm("Are you sure you want to delete?");
      if (delconfm == true) {
        // delete the record if confirmed

        this.$pouch
          .remove("maindb", {
            _id: this.$route.params.id,
            _rev: this.atable._rev
          })
          .then(() => {
            this.$router.push({ name: "posts" });
          });
      }
    },
    confirm() {
      this.$refs.confirm
        .open("Delete", "Are you sure?", { color: "red" })
        .then(confirm => {});
    }
  },

  // Use the pouch property to configure the component to (reactively) read data from pouchdb.
  pouch: {
    // You can also specify the database dynamically (local or remote), as well as limits, skip and sort order:
    atable: function() {
      return {
        //database: this.selectedDatabase, // you can pass a database string or a pouchdb instance
        database: "maindb",
        selector: { _id: this.$route.params.id },
        first: true
      };
      // console.log(this.atable);
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

