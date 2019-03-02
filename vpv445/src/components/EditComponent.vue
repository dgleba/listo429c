<template>
  <div class="atable">
    <div class="svdiv"></div>
    <h4>Edit</h4>
    <form @submit.prevent="update_mrow">
      <div class="row">
        <div class="col-md-11">
          <div class="form-group">
            <label> Title: </label>
            <input type="text" class="form-control" v-model="atable.title" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-11">
          <div class="form-group">
            <label>Body: </label>
            <textarea
              class="form-control"
              v-model="atable.body"
              rows="4"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-11">
          <div class="form-group">
            <label>Statusfld:</label>
            <input
              type="text"
              class="form-control"
              v-model="atable.statusfld"
            />
          </div>
        </div>
      </div>
      <br />
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
export default {
  data() {
    return {
      mrow: {},
      atable: {}
    };
  },

  created_api() {
    //
    // let uri = `http://localhost:4000/posts/edit/${this.$route.params.id}`;
    // this.axios.get(uri).then(response => {
    //   this.post = response.data;
    // });
  },
  methods: {
    updatePost_api() {
      //   let uri = `http://localhost:4000/posts/update/${this.$route.params.id}`;
      //   this.axios.post(uri, this.post).then(() => {
      //  this.$router.push({ name: "posts" });
      //   });
    },

    update_mrow: function() {
      console.log(this.atable);
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
    deletePost_api(id) {
      // let uri = `http://localhost:4000/posts/delete/${id}`;
      // this.axios.delete(uri).then(response => {
      //   this.posts.splice(this.posts.indexOf(id), 1);
      // });
    },
    delete_mrow(id) {
      console.log("to delete.. ", this.atable);
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
    confirm_x() {
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
      console.log(this.atable);
    }
  }
};
</script>
