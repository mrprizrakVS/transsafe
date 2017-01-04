Meteor.methods({
  sendVerificationLink(userId = Meteor.userId()) {
    if (userId) {
      return Accounts.sendVerificationEmail( userId );
    }
  }
});