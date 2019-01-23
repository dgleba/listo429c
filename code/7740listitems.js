
    //  list items


    // the user wants to see the contents of a shopping list
    // we load it and switch views
    /**
     * Called when the user wants to edit the contents of a shopping list.
     * The mode is set to 'itemedit'. Vue's currentListId is set to this list's
     * id field.
     * @param {String} id
     * @param {String} title
     */
    onClickList: function (id, title) {
        this.currentListId = id;
        this.pagetitle = title;
        this.mode = 'itemedit';
      },
  
      /**
       * Called when a new shopping list item is added. A new shopping list item
       * object is created with a unique id. It is written to PouchDB and added
       * to Vue's shoppingListItems array
       */
      onAddListItem: function () {
        if (!this.newItemTitle) return;
        var obj = JSON.parse(JSON.stringify(sampleListItem));
        obj._id = 'item:' + tsuid();
        obj.title = this.newItemTitle;
        obj.list = this.currentListId;
        obj.createdAt = new Date().toISOString();
        obj.updatedAt = new Date().toISOString();
        db.put(obj).then((data) => {
          obj._rev = data.rev;
          this.shoppingListItems.unshift(obj);
          this.newItemTitle = '';
        });
      },
  
  
      /**
       * Called when an item is checked or unchecked from a shopping list.
       * The item is located and written to PouchDB
       * @param {String} id
       */
      onCheckListItem: function (id) {
        this.findUpdateDoc(this.shoppingListItems, id);
      },
  
      /**
       * Called when an item is deleted from a shopping list. We locate the item
       * in the list, delete it from PouchDB and remove it from the shoppingListItems
       * Vue array.
       * @param {String} id
       */
      onDeleteItem: function (id) {
        var match = this.findDoc(this.shoppingListItems, id);
        db.remove(match.doc).then((data) => {
          this.shoppingListItems.splice(match.i, 1);
        });
      },

      