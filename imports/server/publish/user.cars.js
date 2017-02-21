import { Meteor } from 'meteor/meteor';
import { UserCars } from '../../api/user.cars.js'

Meteor.publish('news.user', (userId) => {
  return UserCars.find({userId});
});