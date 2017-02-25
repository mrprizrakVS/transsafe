import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { ImagesCollections } from '../../api/images.js';

import { User } from '../../api/user.js';
import { News } from '../../api/news.js';
import { Uploader } from '../../services/file_uploader.js';
import { NewsSchema } from '../../schemas/newsSchema.js';

import './serviceAccountLayout.html';
import '../../components/addition_photos/addition_photos.js';
import '../../components/news_item/news_item.js';

Template.serviceAccountLayout.onCreated(function() {
  this.autorun(() => {
    Meteor.subscribe('user', FlowRouter.getParam('id'));
    Meteor.subscribe('files.user.images.all', FlowRouter.getParam('id'));
    Meteor.subscribe('news.user', FlowRouter.getParam('id'));
    Meteor.subscribe('files.service.banner.images.all', FlowRouter.getParam('id'));
  });
  this.currentUpload = new ReactiveVar(false);
  this.showInfo = new ReactiveVar(true);
});

Template.serviceAccountLayout.helpers({
  user() {
    return User.findOne({_id: FlowRouter.getParam('id')});
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
  bannerPhoto() {
    return ImagesCollections.ServicesBannerPhoto.findOne({}, {
      sort: { 'meta.date': -1 },
      limit: 1
    });
  },
  showInfo() {
    return Template.instance().showInfo.get();
  },
  currentUpload() {
    return Template.instance().currentUpload.get();
  },
  news() {
    return News.find({}, {
      sort: {
        createdAt: -1
      }
    });
  },
  NewsSchema
});


Template.serviceAccountLayout.events({
  'click #toggle-service-info'(e, template) {
      return template.showInfo.set(!template.showInfo.get());
   },
   'change #serviceUploadMainPhoto'(e, template) {
      Uploader(e, template);
   },
   'submit #addServiceNews'(e, template) {
      e.preventDefault();

      let title = e.target.title,
          content = e.target.content;

      Meteor.call('addNews', {
        title: title.value,
        content: content.value,
        authorName: User.findOne({_id: FlowRouter.getParam('id')}).profile.generalInfo.name
      }, (err, data) => {
        if(err) {
          console.warn('Create post', err);

          return alert('При збереженні виникла помилка');
        }

        title.value = '';
        content.value = '';
      });
   },
   'change #upload-banner'(e, template) {
      Uploader(e, template, 'ServicesBannerPhoto', {isBanner: true});
   },
   'click #subscribeService'(e, template) {
      e.preventDefault();

      Meteor.call('subscribeService', FlowRouter.getParam('id'), Meteor.userId());
   }
});