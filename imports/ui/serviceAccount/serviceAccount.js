import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { UserImages } from '../../api/images.js';

import { User } from '../../api/user.js';

import './serviceAccountLayout.html';

Template.serviceAccountLayout.onCreated(function() {
  this.autorun(() => {
    Meteor.subscribe('user', FlowRouter.getParam('id'));
    Meteor.subscribe('files.images.all');
  });
  this.currentUpload = new ReactiveVar(false);
  this.showInfo = new ReactiveVar(true);
});

Template.serviceAccountLayout.helpers({
  user() {
    return User.findOne();
  },
  userEmail() {
    return User.findOne().emails[0].address;
  },
  showInfo() {
    return Template.instance().showInfo.get();
  }
});


Template.serviceAccountLayout.events({
  'click #toggle-service-info'(e, template) {
      return template.showInfo.set(!template.showInfo.get());
   }
});