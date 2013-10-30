define(['jquery', 'ko', 'utils/datastore'],
  function($, ko, dataStore){
    var ListContacts = function(){
      var self = this;

      this.contacts = ko.observableArray([]);
      
      $(document).on('updated.data', function(){
        var data = dataStore.fetch();
        self.contacts(data);
      });
    };

    return ListContacts;
  });