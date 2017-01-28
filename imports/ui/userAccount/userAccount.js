import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { User } from '../../api/user.js';

import './userAccountLayout.html';

Template.userAccountLayout.onCreated(function() {
  this.autorun(() => {
    Meteor.subscribe('user', FlowRouter.getParam('id'));
  });
});

Template.userAccountLayout.helpers({
  user() {
    return User.findOne();
  }
});