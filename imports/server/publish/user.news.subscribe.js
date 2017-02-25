import { Meteor } from 'meteor/meteor';
import { News } from '../../api/news.js';
import { User } from '../../api/user.js';

Meteor.publish('news.user.subscribe', (_id) => {
  return News.find({authourId: {$in: User.findOne({_id}).profile.subscribeServices}});
});