import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { UserCars } from '../../api/user.cars.js';

import '../../components/user_cars/user_cars.js';
import './userAccountCarsLayout.html';

window.UserCars = UserCars;

Template.userAccountCarsLayout.onCreated(function() {
  this.autorun(() => {
    Meteor.subscribe('user.cars', FlowRouter.getParam('id'));
  });
});

Template.userAccountCarsLayout.helpers({
  UserCars,
  cars() {
    return UserCars.find();
  }
});
