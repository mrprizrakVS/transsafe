import { Accounts } from 'meteor/accounts-base';
import { FlowRouter } from 'meteor/kadira:flow-router';

Accounts.ui.config({
	passwordSignupFields: 'EMAIL_ONLY'
});

Accounts.onLogout(function() {
	FlowRouter.go('home');
});
