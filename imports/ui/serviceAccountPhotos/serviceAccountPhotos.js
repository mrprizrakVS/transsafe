import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { ImagesCollections } from '../../api/images.js';

import './serviceAccountPhotosLayout.html';

Template.serviceAccountPhotosLayout.onRendered(() => {
  $('.swipebox').swipebox();
});

Template.serviceAccountPhotosLayout.onCreated(function() {
  this.autorun(() => {
    Meteor.subscribe('files.service.images.all', FlowRouter.getParam('id'));
  });
});



Template.serviceAccountPhotosLayout.helpers({
  photos() {
    return ImagesCollections.ServicesAdditionPhoto.find({
      userId: FlowRouter.getParam('id')
    }, {
      sort: { 'meta.date': -1 },
    });
  }
});