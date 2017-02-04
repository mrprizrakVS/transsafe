import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import '../config/schemas.config.js';

const Schema = {};

SimpleSchema.debug = true;

Schema.UserProfileContact = new SimpleSchema({
  country: {
    type: String,
    label: 'Країна',
    optional: true,
    autoform: {
      placeholder: 'Україна'
    }
  },
  city: {
    type: String,
    label: 'Місто',
    optional: true,
    autoform: {
      placeholder: 'Львів'
    }
  },
  phone: {
    type: String,
    label: 'Телефон',
    optional: true,
    autoform: {
      placeholder: '+380792375423'
    }
  },
  skype: {
    type: String,
    label: 'Skype',
    optional: true,
    autoform: {
      placeholder: 'skype_login'
    }
  }
});

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
  },
  dateBorn: {
    type: Date,
    label: "Дата народження",
    optional: true
  },
  contactInfo: {
    type: Schema.UserProfileContact,
    label: 'Контакна інформація',
    optional: true
  }
});


Schema.User = new SimpleSchema({
  profile: {
    type: Schema.UserProfile,
    label: 'Профіль'
  }
});

export const UsersProfileSchema = Schema.User;