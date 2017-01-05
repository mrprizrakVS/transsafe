import { Template } from 'meteor/templating';

import './emailVerifiedLayout.html';

Template.verifyEmailLayout.events({
	'click #resend-email'(e, template) {
		Meteor.call('sendVerificationLink', (err, response) => {
			if(err) {
				console.warn('Warning!', err);
			} else {
				console.log(`Verification sent to ${ Meteor.user().emails[0].address } success!`);
			}
		});
	}
});

