import { Template } from 'meteor/templating';

import { UserCars } from '../../api/user.cars.js';

window.UserCars = UserCars;

import './serviceAccountCarsLayout.html';

Template.serviceAccountCarsLayout.helpers({
  UserCars
});
