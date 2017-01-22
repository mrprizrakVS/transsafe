// import { SimpleSchema } from 'meteor/aldeed:simple-schema';

// const Schema = {};

// SimpleSchema.debug = true;

// Schema.contactInfo = new SimpleSchema({
//   contactPerson: {
//     type: String,
//     label: "Контактна особа",
//     optional: true
//   },
//   companySite: {
//     type: String,
//     label: "Сайт компанії",
//     optional: true
//   }
// });

// Schema.generalInfo = new SimpleSchema({
//   name: {
//     type: String,
//     optional: true,
//     label: "Назва"
//   },
//   compType: {
//     type: String,
//     allowedValues: ['Компанія, що надає послуги'],
//     optional: true,
//     label: "Тип компанії",
//     autoform: {
//       firstOption: "- Оберіть тип -"
//     }
//   },
//   address: {
//     type: String,
//     label: "Адреса",
//     optional: true
//   },
//   phones: {
//     type: [String],
//     optional: true,
//     label: "Телефон"
//   },
//   numberOfWorker: {
//     type: Number,
//     optional: true,
//     label: "К-сть робітників"
//   }
// });

// Schema.ServiceProfile = new SimpleSchema({
//   generalInfo: {
//     type: Schema.generalInfo,
//     optional: true,
//     label: "Загальна інформація"
//   },
//   contactInfo: {
//     type: Schema.contactInfo,
//     optional: true,
//     label: "Контакна інформація"
//   },
// });


// Schema.ServiceSchema = new SimpleSchema({
//   profile: {
//     type: Schema.ServiceProfile,
//     optional: true,
//     label: false
//   },
//   username: {
//     type: String,
//     label: "Логін",
//     optional: true,
//     autoform: {
//       placeholder: 'Login'
//     }
//   },
//   emails: {
//     type: Array,
//     label: "Email адреса",
//     optional: true
//   },
//   "emails.$": {
//     type: Object,
//   },
//   "emails.$.address": {
//     type: String,
//     label: "Email адрес",
//     regEx: SimpleSchema.RegEx.Email
//   },
//   "emails.$.verified": {
//     type: Boolean,
//     autoValue: false,
//     autoform: {
//       type: "hidden"
//     }
//   },
//   createdAt: {
//     type: Date,
//     optional: true,
//     autoValue() {
//       return new Date();
//     },
//     autoform: {
//       type: "hidden"
//     }
//   },
//   password: {
//     type: String,
//     label: "Пароль",
//     optional: true
//   },
//   services: {
//     type: Object,
//     optional: true,
//     blackbox: true,
//     autoform: {
//       type: "hidden"
//     }
//   }
// });

// export const ServiceSchema = Schema.ServiceSchema;