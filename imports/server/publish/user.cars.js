import { Meteor } from 'meteor/meteor';
import { UserCars } from '../../api/user.cars.js'

Meteor.publish('user.cars', (ownerId) => {
  return UserCars.find({ownerId});
});