import { Mongo } from 'meteor/mongo';

import { UserCarsSchema } from '../schemas/userCarsSchema.js';

const UserCars = new Mongo.Collection('userCars');
UserCars.attachSchema(UserCarsSchema);

// Allow rules for collection
UserCars.allow({
  insert(userId, doc) {
    return userId === doc.ownerId;
  },
  update(userId, doc) {
    return userId === doc.ownerId;
  },
  remove(userId, doc) {
    return userId === doc.ownerId;
  }
});


export { UserCars };