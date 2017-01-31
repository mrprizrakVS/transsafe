import { Template } from 'meteor/templating';

import { User } from '../../api/user.js';
import { UsersProfileSchema } from '../../schemas/userProfileSchema.js';
import insertDocument from '../../services/insert_doc.js';
import { ReactiveVar } from 'meteor/reactive-var';

import './userAccountEditLayout.html';

Template.userAccountLayout.onCreated(function() {
  this.autorun(() => {
    Meteor.subscribe('user', FlowRouter.getParam('id'));
    Meteor.subscribe('files.images.all');
  });

  this.userId = new ReactiveVar(User.findOne()._id);
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
    debugger;
    console.log('e', e);
    e.preventDefault();


    let doc = insertDocument({}, e.target);
    UserSchema.namedContext().validate(doc)

    check(doc, UserSchema);

    console.log('doc', doc);

    // Meteor.users.update(template.userId.get(), doc);
  }
});