import { Template } from 'meteor/templating';

import { ServiceProfileSchema } from '../../schemas/serviceProfileSchema.js';
import { PriceListSchema } from '../../schemas/servicePriceListSchema.js';
import { User } from '../../api/user.js';

import './serviceAccountEditLayout.html';
import '../../components/change_password/change_password.js';

Template.serviceAccountEditLayout.onCreated(function() {
  this.autorun(() => {
    Meteor.subscribe('user', FlowRouter.getParam('id'));
  });

  this.userRole = new ReactiveVar();
});

Template.serviceAccountEditLayout.helpers({
  ServiceProfileSchema,
  PriceListSchema,
  serviceDoc() {
    let service = User.findOne();

    if(service) {
      service.email = service.emails[0].address;
      Template.instance().userRole.set(service.profile.role);

      return service;
    }

  }
});

Template.serviceAccountEditLayout.events({
  'submit #editPriceListServiceForm'(e, template) {
    e.preventDefault();


    let objDoc = insertDocument({}, e.target),
        doc = Object.values(objDoc.priceList);

    Meteor.call('upsertUser', {priceList: doc}, (err, response) => {
      if(err) {
        return alert('При збереженні виникла помилка');
      }

      return alert('Зміни збережено');
    });
  },
  'submit #editBasisServiceForm'(e, template) {
    e.preventDefault();


    let doc = insertDocument({
      profile: {
        role: template.userRole.get()
      }
    }, e.target);

    check(doc, ServiceProfileSchema);

    Meteor.call('upsertUser', doc, (err, response) => {
      if(err) {
        return alert('При збереженні виникла помилка');
      }

      return alert('Зміни збережено');
    });
  }
});

