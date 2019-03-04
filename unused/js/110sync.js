
    // ===================================================

    // Sync:


    /**
     * Called when sync button on the settings panel is clicked. The
     * Cloudant sync URL is saved in PouchDB and the sync process starts.
     */
    onClickStartSync: function () {
        var obj = {
          '_id': '_local/user',
          'syncURL': this.syncURL
        };
        this.saveLocalDoc(obj).then(() => {
          this.startSync();
        });
      },
      /**
       * Called when the sync process is to start. Initiates a PouchDB to
       * to Cloudant two-way sync and listens to the changes coming in
       * from the Cloudant feed. We need to monitor the incoming change
       * so that the Vue.js model is kept in sync.
       */
      startSync: function () {
        this.syncStatus = 'notsyncing';
        if (this.sync) {
          this.sync.cancel();
          this.sync = null;
        }
        if (!this.syncURL) { return; }
        this.syncStatus = 'syncing';
        this.sync = db.sync(this.syncURL, {
          live: true,
          retry: true
        }).on('change', (info) => {
          // handle change
          // if this is an incoming change
          if (info.direction == 'pull' && info.change && info.change.docs) {
  
            // loop through all the changes
            for (var i in info.change.docs) {
              var change = info.change.docs[i];
              var arr = null;
  
              // see if it's an incoming item or list or something else
              if (change._id.match(/^item/)) {
                arr = this.shoppingListItems;
              } else if (change._id.match(/^list/)) {
                arr = this.shoppingLists;
              } else {
                continue;
              }
  
              // locate the doc in our existing arrays
              var match = this.findDoc(arr, change._id);
  
              // if we have it already 
              if (match.doc) {
                // and it's a deletion
                if (change._deleted == true) {
                  // remove it
                  arr.splice(match.i, 1);
                } else {
                  // modify it
                  delete change._revisions;
                  Vue.set(arr, match.i, change);
                }
              } else {
                // add it
                if (!change._deleted) {
                  arr.unshift(change);
                }
              }
            }
          }
        }).on('error', (e) => {
          this.syncStatus = 'syncerror';
        }).on('denied', (e) => {
          this.syncStatus = 'syncerror';
        }).on('paused', (e) => {
          if (e) {
            this.syncStatus = 'syncerror';
          }
        });;
      },
  