import { Meteor } from 'meteor/meteor';
import { UserImages } from '../api/images.js';

Meteor.publish('files.images.all', () => {
  return UserImages.find().cursor;
});