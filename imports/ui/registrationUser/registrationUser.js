import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Users } from '../../api/users.js';

window.Users = Users;

import './registrationUserLayout.html';


Template.registrationUserLayout.helpers({
	users() {
		return Meteor.users();
	}
});
