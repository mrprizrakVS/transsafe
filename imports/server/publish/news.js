import { Meteor } from 'meteor/meteor';
import { News } from '../../api/news.js';

Meteor.publish('news.user', (authourId) => {
  return News.find({authourId});
});