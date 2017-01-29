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
  });
  this.currentUpload = new ReactiveVar(false);
});

Template.userAccountLayout.helpers({
  user() {
    return User.findOne();
  },
  image() {
    return UserImages.findOne({userId: FlowRouter.getParam('id')}, {
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
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      let upload = UserImages.insert({
        file: e.currentTarget.files[0],
        streams: 'dynamic',
        chunkSize: 'dynamic',
        meta: {
          date: new Date()
        }
      }, false);

      upload.on('start', function() {
        template.currentUpload.set(this);
      });

      upload.on('end', function(error, fileObj) {
        if (error) {
          alert(`Помилка при завантаженні: ${error}`);
        } else {
          alert(`Зображення "${fileObj.name}" успішно завантажене`);
        }
        template.currentUpload.set(false);
      });

      upload.start();
    }
  }
});