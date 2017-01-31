import { Template } from 'meteor/templating';

import { User } from '../../api/user.js';
import { UsersProfileSchema } from '../../schemas/userProfileSchema.js';
import insertDocument from '../../services/insert_doc.js';
import { ReactiveVar } from 'meteor/reactive-var';

import './userAccountEditLayout.html';

Template.userAccountEditLayout.onCreated(function() {
  this.autorun(() => {
    Meteor.subscribe('user', FlowRouter.getParam('id'));
    Meteor.subscribe('files.images.all');
  });
});



Template.userAccountEditLayout.helpers({
  UsersProfileSchema,
  userDoc() {
    let user = User.findOne();
    user ? user.email = user.emails[0].address : null;

    return user;
  }
});

Template.userAccountEditLayout.events({
  'submit #editBasisUserForm'(e, template) {
    e.preventDefault();


    let doc = insertDocument({}, e.target);

    check(doc, UsersProfileSchema);

    Meteor.call('upsertUser', doc, (err, response) => {
      if(err) {
        return alert('При збереженні виникла помилка');
      }

      return alert('Зміни збережено');
    });
  }
});