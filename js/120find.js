    // ===================================================

    // find:


    /**
     * Given a list of docs and an id, find the doc in the list that has
     * an '_id' (key) that matches the incoming id. Returns an object 
     * with the 
     *   i - the index where the item was found
     *   doc - the matching document
     * @param {Array} docs
     * @param {String} id
     * @param {String} key
     * @returns {Object}
     */
    findDoc: function (docs, id, key) {
        if (!key) {
          key = '_id';
        }
        var doc = null;
        for (var i in docs) {
          if (docs[i][key] == id) {
            doc = docs[i];
            break;
          }
        }
        return { i: i, doc: doc };
      },
  
      /**
       * Given a list of docs and an id, find the doc in the list that has
       * an '_id' (key) that matches the incoming id. Updates its "updatedAt"
       * attribute and write it back to PouchDB.
       *   i - the index where the item was found
       *   doc - the matching document
       * @param {Array} docs
       * @param {String} id
  
       */
      findUpdateDoc: function (docs, id) {
  
        // locate the doc
        var doc = this.findDoc(docs, id).doc;
  
        // if it exits
        if (doc) {
  
          // modift the updated date
          doc.updatedAt = new Date().toISOString();
  
          // write it on the next tick (to give Vue.js chance to sync state)
          this.$nextTick(() => {
  
            // write to database
            db.put(doc).then((data) => {
  
              // retain the revision token
              doc._rev = data.rev;
            });
          });
        }
      },