import { Meteor } from 'meteor/meteor';

Meteor.publish('user', (userId) => {
  return Meteor.users.find(userId);
});