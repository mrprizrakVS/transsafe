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
        console.log(doc);
        window.doc = doc;
        Accounts.createUser(doc, function(err, data) {
            debugger;
        });
        // Meteor.loginWithPassword(doc.emails[0].address, doc.password);
    },
    onSuccess:function(operation, result, template){
    	debugger;
    },
    onError: function(operation, error, template) {
        console.log('bad');
        debugger;
    }
  }
});