Template.profile.helpers({
  username: function() {
  	Session.get('userProfile');
     var user = Meteor.users.findOne(Meteor.userId(), {fields: {username:1}})
     if (user) {
       return user.username
     }
   }
});