import { Template } from 'meteor/templating';

import { ServiceProfileSchema } from '../../schemas/serviceProfileSchema.js';
import { User } from '../../api/user.js';

import './serviceAccountEditLayout.html';

Template.serviceAccountEditLayout.onCreated(function() {
  this.autorun(() => {
    Meteor.subscribe('user', FlowRouter.getParam('id'));
  });

  this.userRole = new ReactiveVar();
});

Template.serviceAccountEditLayout.helpers({
  ServiceProfileSchema,
  serviceDoc() {
    let service = User.findOne();

    service ? service.email = service.emails[0].address : null;
    Template.instance().userRole.set(service.profile.role);

    return service;
  }
});

