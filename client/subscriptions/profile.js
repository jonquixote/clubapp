if (Meteor.isClient) {
	UserProfile = new Meteor.Collection("userProfile");

	Meteor.subscribe('userProfile');
}
