import { Meteor } from 'meteor/meteor';
import { ImagesCollections } from '../../api/images.js';

Meteor.publish('files.user.images.all', (userId) => {
  return ImagesCollections.UserImages.find({
    userId
  }).cursor;
});

Meteor.publish('files.service.images.all', (userId) => {
  return ImagesCollections.ServicesAdditionPhoto.find({
    userId
  }).cursor;
});

Meteor.publish('files.service.banner.images.all', (userId) => {
  return ImagesCollections.ServicesBannerPhoto.find({
    userId
  }).cursor;
});