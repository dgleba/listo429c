

  // ===================================================

  //   find list  -  default initial code to run.


  /**
   * Called once when the app is first loaded
   */
  created: function () {

    // create database index on 'type'
    db.createIndex({ index: { fields: ['type'] } }).then(() => {

      // load all 'list' items 
      var q = {
        selector: {
          type: 'list'
        }
      };
      return db.find(q);
    }).then((data) => {

      // write the data to the Vue model, and from there the web page
      app.shoppingLists = data.docs;

      // get all of the shopping list items
      var q = {
        selector: {
          type: 'item'
        }
      };
      return db.find(q);
    }).then((data) => {
      // write the shopping list items to the Vue model  ---- List saved to model
      app.shoppingListItems = data.docs;

      // load settings (Cloudant sync URL)
      return db.get('_local/user');
    }).then((data) => {
      // if we have settings, start syncing
      this.syncURL = data.syncURL;
      this.startSync();
    }).catch((e) => { })

  },
