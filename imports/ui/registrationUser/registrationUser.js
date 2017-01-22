import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { UsersSchema } from '../../schemas/userSchema.js';
import insertDocument from '../../services/insert_doc.js';

import './registrationUserLayout.html';


Template.registrationUserLayout.helpers({
  UsersSchema
});

Template.registrationUserLayout.events({
  'submit #insertUserForm'(e, template) {
    e.preventDefault();
    let doc = insertDocument({}, e.target);

    doc.profile.role = 'user';

    check(doc, UsersSchema);

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
