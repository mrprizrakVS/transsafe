import { Template } from 'meteor/templating';

import './sendVerifyLayout.html';

Template.sendVerifyLayout.helpers({

});

Template.sendVerifyLayout.events({
	'click #resend-email'(e, template) {
		e.preventDefault();

		Meteor.call('sendVerificationLink', (err, response) => {
			if(err) {
				console.warn('Warning!', err);
			} else {
				console.log(`Verification sent to ${ Meteor.user().emails[0].address } success!`);
			}
		});
	}
});
