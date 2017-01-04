import { AutoForm } from 'meteor/aldeed:autoform';
import { Accounts } from 'meteor/accounts-base'
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';

import { Users } from '../../api/users.js';

AutoForm.hooks({
  insertUserForm: {
    onSubmit(doc) {
        this.event.preventDefault();
        check(doc, Users.simpleSchema());

        Accounts.createUser(doc, (error) => {
            if(error) {
                console.warn('Registration error', error);
            } else {
                Meteor.call('sendVerificationLink', (error, response) => {
                    if(error) {
                        console.warn('Verification problem!');
                    } else {
                        console.log('Welcome!', 'success');
                    }
                })
            }
        });
    },
    onError: function(operation, error, template) {
        console.log('Error', error);
    }
  },
  authForm: {
    onSubmit(doc) {
        this.event.preventDefault();

        Meteor.loginWithPassword(doc.email, doc.password);
    }
  }
});