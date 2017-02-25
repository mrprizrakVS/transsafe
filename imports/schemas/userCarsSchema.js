import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import '../config/schemas.config.js';

const Schema = {};

SimpleSchema.debug = true;

Schema.Model = new SimpleSchema({
  years: {
    type: Date,
    label: "Рік",
    autoform: {
      placeholder: "12/02/2005"
    }
  },
  brand: {
    type: String,
    label: "Марка",
    autoform: {
      placeholder: "BMW"
    }
  },
  model: {
    type: String,
    label: "Модель",
    autoform: {
      placeholder: "360"
    }
  }
});

Schema.Wheels = new SimpleSchema({
  size: {
    type: Number,
    label: "Розмір",
    autoform: {
      placeholder: "R 15"
    }
  },
  material: {
    type: String,
    label: "Матеріал",
    allowedValues: ['Литі', 'Сталь'],
    autoform: {
      firstOption: "- Оберіть матеріал -"
    }
  }
});

Schema.Car = new SimpleSchema({
  createdAt: {
    type: Date,
    autoValue() {
      return new Date();
    },
    autoform: {
      type: 'hidden'
    }
  },
  ownerId: {
    type: String,
    label: "Власник",
    autoform: {
      type: 'hidden'
    }
  },
  model: {
    type: Schema.Model,
    label: "Модель"
  },
  wheels: {
    type: Schema.Wheels,
    label: "Покришки"
  }
});

export const UserCarsSchema = Schema.Car;