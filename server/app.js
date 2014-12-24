// generate dummy content
Meteor.startup(function () {
  if (Messages.find().count() === 0) {
    for (i = 0; i <= 50; i++) {
      Messages.insert({
        title: "HI",
        body: "ok"
      });
    }
  }
});