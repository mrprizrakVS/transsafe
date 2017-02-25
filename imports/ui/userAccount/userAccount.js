import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { ImagesCollections } from '../../api/images.js';

import { User } from '../../api/user.js';
import { News } from '../../api/news.js';
import { Uploader } from '../../services/file_uploader.js';

import './userAccountLayout.html';
import '../../components/addition_photos/addition_photos.js';
import '../../components/news_item/news_item.js';

Template.userAccountLayout.onCreated(function() {
  this.autorun(() => {
    Meteor.subscribe('user', FlowRouter.getParam('id'));
    Meteor.subscribe('files.user.images.all', FlowRouter.getParam('id'));
    Meteor.subscribe('news.user.subscribe', FlowRouter.getParam('id'));
  });
  this.currentUpload = new ReactiveVar(false);
});

Template.userAccountLayout.helpers({
  user() {
    return User.findOne({_id: FlowRouter.getParam('id')});
  },
  image() {
    return ImagesCollections.UserImages.findOne({userId: FlowRouter.getParam('id')}, {
      sort: { 'meta.date': -1 },
      limit: 1
    });
  },
  subscriberLength() {
    return User.findOne({_id: FlowRouter.getParam('id')}).profile.subscribeServices.length;
  },
  news() {
    console.log(News.find().fetch());
    return News.find();
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