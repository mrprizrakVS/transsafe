import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { Uploader } from '../../services/file_uploader.js';
import { ImagesCollections } from '../../api/images.js';

import './addition_photos.html';

Template.AdditionPhotosLayout.onRendered(() => {
  $('.swipebox').swipebox();
});

Template.AdditionPhotosLayout.onCreated(function() {
  this.autorun(() => {
    Meteor.subscribe('files.service.images.all', FlowRouter.getParam('id'));
  });
  this.currentUpload = new ReactiveVar(false);
});

Template.AdditionPhotosLayout.helpers({
  overviewImages() {
    return ImagesCollections.ServicesAdditionPhoto.find({
      userId: FlowRouter.getParam('id')
    }, {
      sort: { 'meta.date': -1 },
      limit: 4
    });
  }
});

Template.AdditionPhotosLayout.events({
  'change #serviceUploadAdditionPhoto'(e, template) {
     Uploader(e, template, 'ServicesAdditionPhoto');
  }
});