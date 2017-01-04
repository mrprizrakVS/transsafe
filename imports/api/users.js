import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
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
    label: "Логін"
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
  // Use this registered_emails field if you are using splendido:meteor-accounts-emails-field / splendido:meteor-accounts-meld
  registered_emails: {
      type: Array,
      optional: true
  },
  'registered_emails.$': {
      type: Object,
      blackbox: true
  },
  email: {
    type: String,
    optional: true,
    regEx: SimpleSchema.RegEx.Email
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

Meteor.users.attachSchema(Schema.User);


export const Users = Meteor.users;
export const UsersSchema = Schema.User;