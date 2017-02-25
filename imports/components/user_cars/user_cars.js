import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import { UserCars } from '../../api/user.cars.js';

import './user_cars.html';

window.UserCars = UserCars;

Template.userCar.onCreated(function() {
  this.updateMode = new ReactiveVar(false);
});

Template.userCar.helpers({
  UserCars,
  updateMode() {
    return Template.instance().updateMode.get();
  }
});

Template.userCar.events({
  'submit #updateUserCar'(e, template) {
    e.preventDefault();

    template.updateMode.set(false);
  },
  'click #edit-trigger'(e, template) {
    e.preventDefault();

    template.updateMode.set(!template.updateMode.get());
  },
  'click #remove-car'(e, template) {
    if(confirm('Ви дійсно хочете видалити автомобіль?')) {
      UserCars.remove(this._id);
    }
  }
})