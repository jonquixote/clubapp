UserProfile = new Meteor.Collection("userProfile");
UserProfile.allow({
  insert: function(){
    return true;
  },
  update: function () {
    return true;
  },
  remove: function(){
    return true;
  }
});