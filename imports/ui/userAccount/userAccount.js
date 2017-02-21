import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { ImagesCollections } from '../../api/images.js';

import { User } from '../../api/user.js';
import { Uploader } from '../../api/images.js';

import './userAccountLayout.html';
import '../../components/addition_photos/addition_photos.js';

Template.userAccountLayout.onCreated(function() {
  this.autorun(() => {
    Meteor.subscribe('user', FlowRouter.getParam('id'));
    Meteor.subscribe('files.user.images.all', FlowRouter.getParam('id'));
  });
  this.currentUpload = new ReactiveVar(false);
});

Template.userAccountLayout.helpers({
  user() {
    return User.findOne();
  },
  image() {
    return ImagesCollections.UserImages.findOne({userId: FlowRouter.getParam('id')}, {
      sort: { 'meta.date': -1 },
      limit: 1
    });
  },
  currentUpload() {
    return Template.instance().currentUpload.get();
  }
});

Template.userAccountLayout.events({
  'change #uploadMainPhoto'(e, template) {
    Uploader(e, template);
  }
});