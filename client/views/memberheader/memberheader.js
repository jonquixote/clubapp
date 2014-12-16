Template.memberheader.helpers({
  username: function() {
     var user = Meteor.users.findOne(Meteor.userId(), {fields: {username:1}})
     if (user) {
       return user.username
     }
   }
});