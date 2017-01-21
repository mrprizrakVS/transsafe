import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Schema = {};

SimpleSchema.debug = true;

Schema.UserProfile = new SimpleSchema({
  firstName: {
    type: String,
    optional: true,
    label: "Ім'я",
    autoform: {
      placeholder: 'Андрій'
    }
  },
  lastName: {
    type: String,
    optional: true,
    label: "Прізвище",
    autoform: {
      placeholder: 'Петриченко'
    }
  },
  gender: {
    type: String,
    allowedValues: ['Чоловік', 'Жінка'],
    optional: true,
    label: "Стать",
    autoform: {
      firstOption: "- Оберіть стать -"
    }
  }
});


Schema.User = new SimpleSchema({
  profile: {
    type: Schema.UserProfile,
    optional: true,
    label: 'Профіль'
  },
  email: {
    type: String,
    optional: true,
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
    optional: true,
    autoform: {
      type: 'password'
    }
  }
});

export const UsersSchema = Schema.User;