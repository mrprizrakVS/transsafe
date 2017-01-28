import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Images } from '../../api/images.js';

import './mainLayout.html';

Template.mainLayout.events({
  'click #logout-btn'(ev) {
    ev.preventDefault();

    Meteor.logout();
  }
});

Template.mainLayout.helpers({
  userRole() {
    return Meteor.user().profile.role === 'user';
  }
});