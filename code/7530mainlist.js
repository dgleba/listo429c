
    // ===================================================


    // add main list


    /**
     * Called when the user clicks the Add Shopping List button. Sets
     * the mode to 'addlist' to reveal the add shopping list form and
     * resets the form variables.
     */
    onClickAddShoppingList: function () {

        // open shopping list form
        this.singleList = JSON.parse(JSON.stringify(sampleShoppingList));
        this.singleList._id = 'list:' + cuid();
        this.singleList.createdAt = new Date().toISOString();
        this.pagetitle = 'New Note List';
        this.places = [];
        this.selectedPlace = null;
        this.mode = 'addlist';
      },
  
      /**
       * Called when the Save Shopping List button is pressed.
       * Writes the new list to PouchDB and adds it to the Vue 
       * model's shoppingLists array
       */
      onClickSaveShoppingList: function () {
  
        // add timestamps
        this.singleList.updatedAt = new Date().toISOString();
  
        // add to on-screen list, if it's not there already
        if (typeof this.singleList._rev === 'undefined') {
          this.shoppingLists.unshift(this.singleList);
        }
  
        // write to database
        db.put(this.singleList).then((data) => {
          // keep the revision tokens
          this.singleList._rev = data.rev;
  
          // switch mode
          this.onBack();
        });
      },
  
      /**
       * Called when the Back button is pressed. Returns to the
       * home screen with a lit of shopping lists.
       */
      onBack: function () {
        this.mode = 'showlist';
        this.pagetitle = 'Note Lists';
      },
  
  
      // ===================================================
  
  
      //  Edit main list
  
  
      /**
       * Called when the Edit button is pressed next to a shopping list.
       * We locate the list document by id and change mode to "addlist",
       * pre-filling the form with that document's details.
       * @param {String} id
       * @param {String} title
       */
      onClickEdit: function (id, title) {
        this.singleList = this.findDoc(this.shoppingLists, id).doc;
        this.pagetitle = 'Edit - ' + title;
        this.places = [];
        this.selectedPlace = null;
        this.mode = 'addlist';
      },
  
      // ===================================================
  
  
      //  Delete main list
  
  
      /**
       * Called when the delete button is pressed next to a shopping list.
       * The shopping list document is located, removed from PouchDB and
       * removed from Vue's shoppingLists array.
       * @param {String} id
       */
      onClickDelete: function (id) {
        var match = this.findDoc(this.shoppingLists, id);
        let delconfm = confirm("Are you sure you want to delete?");
        if (delconfm == true) {
          // delete the record if confirmed 
          db.remove(match.doc).then(() => {
            this.shoppingLists.splice(match.i, 1);
          });
        }
      },
  
  
      // ===================================================
  