

  // ===================================================

  //   Computed..



  // computed functions return data derived from the core data.
  // if the core data changes, then this function will be called too.
  computed: {
    /**
     * Calculates the counts of items and which items are checked
     * grouped by shopping list
     * 
     * @returns {Object}
     */
    counts: function () {
      var obj = {};
      // count #items and how many are checked
      for (var i in this.shoppingListItems) {
        var d = this.shoppingListItems[i];
        if (!obj[d.list]) {
          obj[d.list] = { total: 0, checked: 0 };
        }
        obj[d.list].total++;
        if (d.checked) {
          obj[d.list].checked++;
        }
      }
      return obj;
    },
    /**
     * Calculates the shopping list but sorted into
     * date order - newest first
     * 
     * @returns {Array}
     */
    sortedShoppingLists: function () {
      return this.shoppingLists.sort(newestFirst);
    },
    /**
     * Calculates the shopping list items but sorted into
     * date order - newest first
     * 
     * @returns {Array}
     */
    sortedShoppingListItems: function () {
      return this.shoppingListItems.sort(newestFirst);
    }
  },