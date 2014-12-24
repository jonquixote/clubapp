Template.memberheader.helpers({
  username: function() {
  	Session.get('userProfile');
     var user = Meteor.users.findOne(Meteor.userId(), {fields: {username:1}})
     if (user) {
       return user.username
     }
   }
});

Template.memberheader.rendered = function () {
    $(document).ready(function() {

      $('.btn-navbar').sidr({
         name: 'respNav',
         source: '.navbar-collapse',
     });

    });

    //this code is close sidr menu if clicked outside  {optional}
    $(document).bind("click", function () {
        $.sidr('close', 'respNav');
    });

  };