import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { UsersSchema } from '../schemas/userSchema.js';

Meteor.users.attachSchema(UsersSchema);

export const Users = Meteor.users;