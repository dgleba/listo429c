

    // ===================================================


    //  lookup place location


    /**
     * Called when the Lookup button is pressed. We make an API call to 
     * OpenStreetMap passing in the user-supplied name of the place. If
     * the API returns something, the options are added to Vue's "places"
     * array and become a pull-down list of options on the front end.
     */
    onClickLookup: function () {

        // make request to the OpenStreetMap API
        var url = 'https://nominatim.openstreetmap.org/search';
        var qs = {
          format: 'json',
          addressdetails: 1,
          namedetails: 1,
          q: this.singleList.place.title
        };
        ajax(url, qs).then((d) => {
  
          // add the list of places to our list
          this.places = d;
  
          // if there is only one item in the list
          if (d.length == 1) {
            // simulate selection of first and only item
            this.onChangePlace(d[0].place_id);
          }
        });
  
      },
  
      // when a place is selected from the list, we find the object in the list
      // and copy the lat/long, licence and name over to our database
      /**
       * Called when an item is selected from the places pull-down list. The
       * place is found in the "places" array and its lat/long, licnece and 
       * address are moved to the Vue object linked with the front-end form.
       * @param {String} v
       */
      onChangePlace: function (v) {
        var doc = this.findDoc(this.places, v, 'place_id').doc;
        this.singleList.place.lat = doc.lat;
        this.singleList.place.lon = doc.lon;
        this.singleList.place.license = doc.licence;
        this.singleList.place.address = doc.address;
      }
  