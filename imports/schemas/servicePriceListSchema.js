import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import '../config/schemas.config.js';

const Schema = {};

SimpleSchema.debug = true;

Schema.priceItem = new SimpleSchema({
  serviceName: {
    type: String,
    autoform: {
      placeholder: 'Назва пункту',
      label: false
    }
  },
  price: {
    type: String,
    autoform: {
      placeholder: 'Ціна',
      label: false
    }
  }
});

Schema.priceListSchema = new SimpleSchema({
  priceList: {
    type: [Schema.priceItem],
    label: 'Прайс-пункт',
    autoform: {
      label: false
    }
  }
});


export const PriceListSchema = Schema.priceListSchema;