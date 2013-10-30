define(['jquery'],
  function($){
    var dataStore = [];

    return {
      fetch: function(){
        return dataStore;
      },
      save: function(data){
        dataStore.push(data);
        $(document).trigger('updated.data');
      }
    };
  });