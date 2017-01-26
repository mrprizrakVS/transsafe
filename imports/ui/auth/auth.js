import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { AuthSchema } from '../../schemas/authSchema.js';

import insertDocument from '../../services/insert_doc.js';

import './authLayout.html';

Template.authLayout.helpers({
  AuthSchema
});

Template.authLayout.events({
  'submit #authUser'(e, template) {
    e.preventDefault();

    let doc = insertDocument({}, e.target);

    Meteor.loginWithPassword(doc.email, doc.password, (err) => {
        if(err) {
            alert('При авторизації виникла помилка');
            console.warn('Login error', err.message);
        } else {
            FlowRouter.go('home');
        }
    });
  }
});

