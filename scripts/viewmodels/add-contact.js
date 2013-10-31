define(['jquery', 'ko', 'utils/datastore'],
  function($, ko, dataStore){
    var AddContact = function(){
      var self = this;
      this.name = ko.observable('');
      this.number = ko.observable('');
      this.validation = ko.observable('');
      
      // Empty fields
      $(document).on('updated.data', function(){
        self.name('');
        self.number('');
        self.validation('');
      });
      $(document).on('error.data', function(){
        self.validation('You already have this contact, please amend the details.');
      });
    };

    AddContact.prototype.saveContact = function(){
      var contact = {
        name: this.name(),
        number: this.number()
      };

      if (contact.name !== '' && contact.number !== '') {
        dataStore.save(contact);
      }
    };

    return AddContact;
  });