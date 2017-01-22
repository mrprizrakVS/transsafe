import { Template } from 'meteor/templating';
import { HTTP } from 'meteor/http'
import { ServiceSchema } from '../../schemas/serviceSchema.js';
import { FlowRouter } from 'meteor/kadira:flow-router';

import insertDocument from '../../services/insert_doc.js';

import './registrationServiceLayout.html';

Template.registrationServiceLayout.helpers({
  ServiceSchema
});

Template.registrationServiceLayout.events({
  'submit #insertServiceForm'(e, template) {
    e.preventDefault();
    let doc = insertDocument({}, e.target);

    doc.profile.role = 'service';

    check(doc, ServiceSchema);

    Accounts.createUser(doc, (error) => {
        if(error) {
            console.warn('Registration error', error);
        } else {
            Meteor.call('sendVerificationLink', (error, response) => {
                if(error) {
                    console.warn('Verification problem!');
                } else {
                    FlowRouter.go('send-verify');
                }
            });
        }
    });
  }
});