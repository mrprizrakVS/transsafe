import { Template } from 'meteor/templating';

import './mainLayout.html';

Template.mainLayout.events({
	'click #logout-btn'(ev) {
		ev.preventDefault();

		Meteor.logout();
	}
});