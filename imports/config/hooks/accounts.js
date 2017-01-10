import { AutoForm } from 'meteor/aldeed:autoform';
import { Accounts } from 'meteor/accounts-base'
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

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
                        FlowRouter.go('verify-email');
                        alert('Лист для верифікації успішно відправлено');
                    }
                });
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

        Meteor.loginWithPassword(doc.email, doc.password, (err) => {
            if(err) {
                console.warn('Login error', err);
                this.done();
            } else {
                FlowRouter.go('home');
            }
        });
    }
  }
});