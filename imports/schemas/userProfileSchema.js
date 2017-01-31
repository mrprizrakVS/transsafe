import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import '../config/schemas.config.js';

const Schema = {};

SimpleSchema.debug = true;

Schema.UserProfile = new SimpleSchema({
  firstName: {
    type: String,
    label: "Ім'я",
    autoform: {
      placeholder: 'Андрій'
    }
  },
  lastName: {
    type: String,
    label: "Прізвище",
    autoform: {
      placeholder: 'Петриченко'
    }
  },
  role: {
    type: String,
    optional: true,
    autoform: {
      type: 'hidden'
    }
  },
  gender: {
    type: String,
    allowedValues: ['Чоловік', 'Жінка'],
    label: "Стать",
    autoform: {
      firstOption: "- Оберіть стать -"
    }
  }
});


Schema.User = new SimpleSchema({
  profile: {
    type: Schema.UserProfile,
    label: 'Профіль'
  },
  password: {
    type: String,
    label: "Пароль",
    optional: true,
    autoform: {
      type: "password",
      autocomplete: false,
      placeholder: "Пароль"
    }
  }
});

export const UsersProfileSchema = Schema.User;