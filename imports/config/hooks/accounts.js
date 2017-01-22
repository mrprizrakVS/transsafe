import { AutoForm } from 'meteor/aldeed:autoform';
import { Accounts } from 'meteor/accounts-base'
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { Users } from '../../api/users.js';

AutoForm.hooks({
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