import { Meteor } from 'meteor/meteor';
import { ImagesCollections } from '../../api/images.js';

Meteor.publish('files.user.images.all', () => {
  return ImagesCollections.UserImages.find().cursor;
});

Meteor.publish('files.service.images.all', () => {
  return ImagesCollections.ServicesAdditionPhoto.find().cursor;
});

Meteor.publish('files.service.banner.images.all', () => {
  return ImagesCollections.ServicesBannerPhoto.find().cursor;
});