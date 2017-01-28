import { Meteor } from 'meteor/meteor';
import { Images } from '../api/images.js';

Meteor.publish('files.images.all', () => {
  return Images.find().cursor;
});