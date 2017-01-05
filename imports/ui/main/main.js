import { Template } from 'meteor/templating';

import './mainLayout.html';

Template.mainLayout.onRendered(function() {
	let tmpl = Template.instance();
	tmpl.view.isRendered;
	debugger;
	this.$('.ui.dropdown').dropdown();
});

Template.mainLayout.events({
	'click #logout-btn'(ev) {
		ev.preventDefault();

		Meteor.logout();
	}
});