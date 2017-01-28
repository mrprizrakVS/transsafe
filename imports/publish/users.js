import { Meteor } from 'meteor/meteor';

Meteor.publish('usersList', (userId) => {
  console.log(Meteor.users.find().count());
  return Meteor.users.find(userId);
});