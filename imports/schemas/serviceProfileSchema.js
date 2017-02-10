import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import '../config/schemas.config.js';

const Schema = {};

SimpleSchema.debug = true;

Schema.contactInfo = new SimpleSchema({
  contactPerson: {
    type: String,
    label: "Контактна особа",
    optional: true,
    autoform: {
      placeholder: "Василь",
      autocomplete: false
    }
  },
  companySite: {
    type: String,
    label: "Сайт компанії",
    optional: true,
    autoform: {
      placeholder: "example.ua"
    }
  }
});

Schema.generalInfo = new SimpleSchema({
  name: {
    type: String,
    label: "Назва",
    autoform: {
      placeholder: "Гарант-Автотехнік",
      autocomplete: false
    }
  },
  compType: {
    type: String,
    allowedValues: ['Компанія, що надає послуги'],
    label: "Тип компанії",
    autoform: {
      firstOption: "- Оберіть тип -"
    }
  },
  address: {
    type: String,
    label: "Адреса",
    autoform: {
      placeholder: "вул. Чорновола 15а",
      autocomplete: false
    }
  },
  phone: {
    type: String,
    label: "Телефон",
    autoform: {
      placeholder: "Номер"
    }
  },
  description: {
    type: String,
    optional: true,
    label: "Про компанію",
    autoform: {
      type: "textarea",
      placeholder: "Компанія..."
    }
  },
  numberOfWorker: {
    type: String,
    optional: true,
    label: "К-сть робітників",
    autoform: {
      placeholder: "12",
      autocomplete: false
    }
  }
});

Schema.ServiceProfile = new SimpleSchema({
  generalInfo: {
    type: Schema.generalInfo,
    label: "Загальна інформація"
  },
  contactInfo: {
    type: Schema.contactInfo,
    label: "Контакна інформація"
  },
  role: {
    type: String,
    optional: true,
    autoform: {
      type: 'hidden'
    }
  }
});


Schema.ServiceSchema = new SimpleSchema({
  profile: {
    type: Schema.ServiceProfile,
    label: 'Профіль'
  },
  email: {
    type: String,
    label: "Email адрес",
    regEx: SimpleSchema.RegEx.Email,
    autoform: {
      placeholder: "example@gmail.com"
    }
  },
  createdAt: {
    type: Date,
    optional: true,
    autoValue() {
      return new Date();
    },
    autoform: {
      type: "hidden"
    }
  }
});

export const ServiceProfileSchema = Schema.ServiceSchema;