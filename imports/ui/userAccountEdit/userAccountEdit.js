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

  this.userRole = new ReactiveVar();
});



Template.userAccountEditLayout.helpers({
  UsersProfileSchema,
  userDoc() {
    let user = User.findOne();

    user ? user.email = user.emails[0].address : null;
    Template.instance().userRole.set(user.profile.role);

    return user;
  }
});

Template.userAccountEditLayout.events({
  'submit #editBasisUserForm'(e, template) {
    e.preventDefault();


    let doc = insertDocument({
      profile: {
        role: template.userRole.get()
      }
    }, e.target);
    doc.profile.dateBorn = new Date(doc.profile.dateBorn);

    check(doc, UsersProfileSchema);

    Meteor.call('upsertUser', doc, (err, response) => {
      if(err) {
        return alert('При збереженні виникла помилка');
      }

      return alert('Зміни збережено');
    });
  }
});