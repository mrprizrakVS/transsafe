import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';
import { ReactiveVar } from 'meteor/reactive-var';

import './change_password.html';

Template.ChangePasswordLayout.onCreated(function() {
  this.error = new ReactiveVar();
});

Template.ChangePasswordLayout.helpers({
  errorReason() {
    return Template.instance().error.get();
  }
});

Template.ChangePasswordLayout.events({
  'submit #reset-password'(e, template) {
    e.preventDefault();

    let currentPassword = e.target.currentPassword.value,
        newPassword = e.target.newPassword.value;

    Accounts.changePassword(currentPassword, newPassword, (err) => {
      if(err) {
        console.warn('change password error', err);

        return template.error.set(err.reason);
      }

      return alert('Пароль змінений успішно!');
    });

  }
});