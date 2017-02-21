import { Meteor } from 'meteor/meteor';
import { News } from '../../api/news.js';

Meteor.publish('news.user.cars', (authourId) => {
  return News.find({authourId});
});