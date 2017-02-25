import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import '../config/schemas.config.js';

const Schema = {};

SimpleSchema.debug = true;

Schema.newsSchema = new SimpleSchema({
  title: {
    type: String,
    autoform: {
      label: false,
      placeholder: 'Заголовок'
    }
  },
  authorName: {
    type: String,
    autoValue() {
      return Meteor.user().profile.generalInfo.name
    },
    autoform: {
      type: 'hidden'
    }
  },
  content: {
    type: String,
    autoform: {
      type: 'textarea',
      label: false,
      placeholder: 'Текст'
    }
  }
});

export const NewsSchema = Schema.newsSchema;