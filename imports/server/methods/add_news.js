import { Meteor } from 'meteor/meteor';

import { News } from '../../api/news.js';

Meteor.methods({
  addNews(data) {
    data.authourId = Meteor.userId();
    data.createdAt = new Date();

    return News.insert(data);
  }
});