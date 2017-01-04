import { AutoForm } from 'meteor/aldeed:autoform';
import { Accounts } from 'meteor/accounts-base'
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';

import { Users } from '../../api/users.js';

AutoForm.hooks({
  insertUserForm: {
    onSubmit: function(doc) {
        this.event.preventDefault();
        check(doc, Users.simpleSchema());

        Accounts.createUser(doc);
    },
    onSuccess:function(operation, result, template){
    	debugger;
    },
    onError: function(operation, error, template) {
        console.log('Error', error);
    }
  }
});