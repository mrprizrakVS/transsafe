import { Meteor } from 'meteor/meteor';

import { UserCars } from '../../api/user.cars.js';

Meteor.methods({
  addCar(data) {
    data.ownerId = Meteor.userId();
    data.createdAt = new Date();

    return UserCars.insert(data);
  }
});