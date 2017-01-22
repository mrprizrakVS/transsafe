import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Schema = {};

SimpleSchema.debug = true;

Schema.contactInfo = new SimpleSchema({
  contactPerson: {
    type: String,
    label: "Контактна особа",
    optional: true,
    autoform: {
      placeholder: "Василь"
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
    optional: true,
    label: "Назва",
    autoform: {
      placeholder: "Гарант-Автотехнік"
    }
  },
  compType: {
    type: String,
    allowedValues: ['Компанія, що надає послуги'],
    optional: true,
    label: "Тип компанії",
    autoform: {
      firstOption: "- Оберіть тип -"
    }
  },
  address: {
    type: String,
    label: "Адреса",
    optional: true,
    autoform: {
      placeholder: "вул. Чорновола 15а"
    }
  },
  phones: {
    type: Number,
    optional: true,
    label: "Телефон",
    autoform: {
      placeholder: "Номер"
    }
  },
  numberOfWorker: {
    type: Number,
    optional: true,
    label: "К-сть робітників",
    autoform: {
      placeholder: "12"
    }
  }
});

Schema.ServiceProfile = new SimpleSchema({
  generalInfo: {
    type: Schema.generalInfo,
    optional: true,
    label: "Загальна інформація"
  },
  contactInfo: {
    type: Schema.contactInfo,
    optional: true,
    label: "Контакна інформація"
  },
});


Schema.ServiceSchema = new SimpleSchema({
  profile: {
    type: Schema.ServiceProfile,
    optional: true,
    label: 'Профіль'
  },
  email: {
    type: String,
    label: "Email адрес",
    regEx: SimpleSchema.RegEx.Email,
    optional: true,
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
  },
  password: {
    type: String,
    label: "Пароль",
    optional: true,
    autoform: {
      placeholder: "Пароль"
    }
  }
});

export const ServiceSchema = Schema.ServiceSchema;