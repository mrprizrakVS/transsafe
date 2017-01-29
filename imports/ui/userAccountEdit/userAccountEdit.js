import { Template } from 'meteor/templating';

import { User } from '../../api/user.js';
import { UsersSchema } from '../../schemas/userSchema.js';
import insertDocument from '../../services/insert_doc.js';
import { ReactiveVar } from 'meteor/reactive-var';

Template.userAccountLayout.onCreated(function() {
  this.autorun(() => {
    Meteor.subscribe('user', FlowRouter.getParam('id'));
    Meteor.subscribe('files.images.all');
  });

  this.userId = new ReactiveVar(User.findOne()._id);
});


import './userAccountEditLayout.html';

Template.userAccountEditLayout.helpers({
  UsersSchema,
  userDoc() {
    let user = User.findOne();
    user ? user.email = user.emails[0].address : null;

    return user;
  }
});

Template.userAccountLayout.events({
  'submit #editBasisUserForm'(e, template) {
    e.preventDefault();

    let doc = insertDocument({}, e.target);

    check(doc, UserSchema);

    console.log('doc', doc);

    // Meteor.users.update(template.userId.get(), doc);
  }
  // 'submit #insertUserForm'(e, template) {
  //   e.preventDefault();
  //   let doc = insertDocument({}, e.target);

  //   doc.profile.role = 'user';

  //   check(doc, UsersSchema);

  //   Accounts.createUser(doc, (error) => {
  //       if(error) {
  //           console.warn('Registration error', error);
  //       } else {
  //           Meteor.call('sendVerificationLink', (error, response) => {
  //               if(error) {
  //                   console.warn('Verification problem!');
  //               } else {
  //                   FlowRouter.go('send-verify');
  //               }
  //           });
  //       }
  //   });
  // }
});