import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import '../config/schemas.config.js';

const Schema = {};

SimpleSchema.debug = true;

Schema = new SimpleSchema({
  email :{
    type: String,
    label: "Email адрес",
    regEx: SimpleSchema.RegEx.Email,
    autoform: {
      placeholder: "example@gmail.com"
    },
    password: {
      type: String,
      label: "Пароль",
      autoform: {
        placeholder: "Пароль"
      }
    }
  }
});