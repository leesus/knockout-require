define(['jquery'],
  function($){
    var dataStore = [],
        dataExists = function(data){
          var i = 0, l = dataStore.length, stringData = JSON.stringify(data);
          for (; i < l; i++) {
            var storeData = JSON.stringify(dataStore[i]);
            if (storeData == stringData) {
              return true;
            }
          }
          return false;
        };

    return {
      fetch: function(){
        return dataStore;
      },
      save: function(data){
        if (dataExists(data)) {
          $(document).trigger('error.data');
        } else {
          dataStore.push(data);
          $(document).trigger('updated.data');
        }
      }
    };
  });