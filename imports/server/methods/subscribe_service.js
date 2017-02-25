import { Meteor } from 'meteor/meteor';
import { User } from '../../api/user.js';

Meteor.methods({
  subscribeService(serviceId, userId) {
    if(Meteor.user().profile.role !== 'user') {
      throw new Meteor.Error('User type must be: user');
    }

    if(Meteor.user().profile.subscribeServices.indexOf(serviceId) === -1) {
      User.update({_id: userId}, {
        $push: {'profile.subscribeServices': serviceId}
      });
    }
  }
});