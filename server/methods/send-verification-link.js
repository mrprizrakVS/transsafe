Meteor.methods({
  sendVerificationLink(id) {
    let userId = id || Meteor.userId();
    let user = Meteor.userId();
    console.log('user', user);
    console.log('userId', userI);
    if ( userId ) {
      return Accounts.sendVerificationEmail( userId );
    }
  }
});