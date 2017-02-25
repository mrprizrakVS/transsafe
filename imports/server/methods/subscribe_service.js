import { Meteor } from 'meteor/meteor';

Meteor.methods({
  subscribeService(serviceId) {
    if(Meteor.user().profile.role !== 'user') {
      throw new Meteor.Error('User type must be: user');
    }

    console.log('serviceId if', serviceId);
  }
});