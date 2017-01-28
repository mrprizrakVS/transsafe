import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { UserImages } from '../../api/images.js';

import { User } from '../../api/user.js';

import './userAccountLayout.html';

Template.userAccountLayout.onCreated(function() {
  this.autorun(() => {
    Meteor.subscribe('user', FlowRouter.getParam('id'));
    Meteor.subscribe('files.images.all');
    window.UserImages = UserImages;
  });
});

Template.userAccountLayout.helpers({
  user() {
    return User.findOne();
  },
  image() {
    return UserImages.findOne();
  }
});


// File

Template.userAccountLayout.onCreated(function () {
  this.currentUpload = new ReactiveVar(false);
});

Template.userAccountLayout.helpers({
  currentUpload: function () {
    return Template.instance().currentUpload.get();
  }
});

Template.userAccountLayout.events({
  'change #fileInput': function (e, template) {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      // We upload only one file, in case
      // multiple files were selected
      var upload = UserImages.insert({
        file: e.currentTarget.files[0],
        streams: 'dynamic',
        chunkSize: 'dynamic'
      }, false);

      upload.on('start', function () {
        template.currentUpload.set(this);
      });

      upload.on('end', function (error, fileObj) {
        if (error) {
          alert('Error during upload: ' + error);
        } else {
          alert('File "' + fileObj.name + '" successfully uploaded');
        }
        template.currentUpload.set(false);
      });

      upload.start();
    }
  }
});