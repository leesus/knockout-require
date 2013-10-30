define(['ko', 'utils/datastore'],
  function(ko, dataStore){
    var AddContact = function(){
      this.name = ko.observable('');
      this.number = ko.observable('');
      this.saveContact = function(){
        var contact = {
          name: this.name(),
          number: this.number()
        };
        if (contact.name !== '' && contact.number !== '') {
          dataStore.save(contact);
        }
      };
    };

    return AddContact;
  });