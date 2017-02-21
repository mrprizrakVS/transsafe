import { Mongo } from 'meteor/mongo';

import { UserCarsSchema } from '../schemas/userCarsSchema.js';

const UserCars = new Mongo.Collection('userCars');
UserCars.attachSchema(UserCarsSchema);


export { UserCars };