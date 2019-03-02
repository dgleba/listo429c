<template>
  <div class="maindb">
    <br />
    <input id="dginput" v-model="arow.name" placeholder="...Enter New... " />
    <button
      id="dgbutton"
      @click="
        $pouch.post('maindb', { name: arow.name, rtype: 'statusfld_type' });
        arow.name = '';
      "
    >
      Save `Statusfield'
    </button>
    <div v-for="arow in maindb">
      <div class="svdiv"></div>
      <input
        id="dginput"
        v-model="arow.name"
        @change="$pouch.put('maindb', arow);"
      />
      <button id="dgbutton" @click="$pouch.remove('maindb', arow);">
        Remove
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    arow: {},
    resultsPerPage: 125,
    currentPage: 1,
    qsearch: "",
    statusflds_x: []
  }),

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

<style>
/* <!--  // make the input box more visible -->
// background-color: hsl(192, 6%, 93%) ;
 */
#dginput {
  color: black;
  background-color: hsl(80, 12%, 91%);
  margin: 2px;
}

#dgbutton {
  background-color: hsl(190, 26%, 91%);
  padding: 6px;
  margin: 5px;
}
</style>
