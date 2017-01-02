import { AutoForm } from 'meteor/aldeed:autoform';
import {Accounts } from 'meteor/accounts-password';

AutoForm.hooks({
  insertUserForm: {
    onSuccess:function(operation, result, template){
    	Meteor.call('sendVerificationLink', (err, response) => {
    		debugger;
    	});
    },
    onError: function(operation, error, template) {
        console.log('bad');
    }
  }
});