import { User } from '../../imports/api/user.js';

Meteor.methods({
  sendVerificationLink(userId = Meteor.userId()) {
    if (userId) {
      return Accounts.sendVerificationEmail(userId);
    }
  },
  upsertUser(doc, userId = Meteor.userId()) {
    User.upsert(userId, {
      $set: doc
    });

    return User.findOne(userId);
  }
});