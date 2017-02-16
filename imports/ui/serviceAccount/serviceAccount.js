import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { ImagesCollections } from '../../api/images.js';

import { User } from '../../api/user.js';
import { Uploader } from '../../services/file_uploader.js';

import './serviceAccountLayout.html';
import '../../components/addition_photos/addition_photos.js';

Template.serviceAccountLayout.onCreated(function() {
  this.autorun(() => {
    Meteor.subscribe('user', FlowRouter.getParam('id'));
    Meteor.subscribe('files.user.images.all');
  });
  this.currentUpload = new ReactiveVar(false);
  this.showInfo = new ReactiveVar(true);
});

Template.serviceAccountLayout.helpers({
  user() {
    return User.findOne();
  },
  image() {
    return ImagesCollections.UserImages.findOne({userId: FlowRouter.getParam('id')}, {
      sort: { 'meta.date': -1 },
      limit: 1
    });
  },
  userEmail() {
    let user = User.findOne();

    if(user) {
      return user.emails[0].address;
    }
  },
  showInfo() {
    return Template.instance().showInfo.get();
  },
  currentUpload() {
    return Template.instance().currentUpload.get();
  }
});


Template.serviceAccountLayout.events({
  'click #toggle-service-info'(e, template) {
      return template.showInfo.set(!template.showInfo.get());
   },
   'change #serviceUploadMainPhoto'(e, template) {
      Uploader(e, template);
   }
});