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
  username: {
    type: String,
    label: "Логін",
    optional: true,
    autoform: {
      placeholder: 'Login'
    }
  },
  emails: {
    type: Array,
    optional: true
  },
  "emails.$": {
    type: Object,
  },
  "emails.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified": {
      type: Boolean,
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
    optional: true
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true,
    autoform: {
      type: 'hidden'
    }
  }
  // In future add roles here...
});

export const UsersSchema = Schema.User;