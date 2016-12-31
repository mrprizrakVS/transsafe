import { Template } from 'meteor/templating';

import './mainLayout.html';

Template.mainLayout.onRendered(function() {
	this.$('.ui.dropdown').dropdown();
	;
});