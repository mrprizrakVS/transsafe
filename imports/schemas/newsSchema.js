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