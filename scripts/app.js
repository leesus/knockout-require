define(['jquery', 'ko', 'viewmodels/add-contact', 'viewmodels/list-contacts'],
  function($, ko, Add, List){
    $(document).ready(function(){
      ko.applyBindings(new Add(), $('#add-contact')[0]);
      ko.applyBindings(new List(), $('#contacts-list')[0]);
    });
  });