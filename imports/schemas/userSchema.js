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
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    autoform: {
      placeholder: 'example@gmail.com'
    }
  },
  createdAt: {
    type: Date,
    optional: true,
    autoValue() {
      return new Date();
    },
    autoform: {
      type: 'hidden'
    }
  },
  password: {
    type: String,
    label: "Пароль",
    autoform: {
      type: "password",
      autocomplete: false,
      placeholder: "Пароль"
    }
  }
});

export const UsersSchema = Schema.User;