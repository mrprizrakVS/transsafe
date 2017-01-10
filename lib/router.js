FlowRouter.triggers.enter([(context, redirect) => {
	// For ui-dropdown
	this.$('.ui.dropdown').dropdown();
}]);

const homeRouters = FlowRouter.group({
	name: 'home-abstract',
	triggersEnter: [(context) => {
			// Trigger
	}]
});

const registrationRouters = FlowRouter.group({
	prefix: '/registration',
	name: 'registration',
});


homeRouters.route('/', {
	name: 'home',
	action(params, queryParams) {
		BlazeLayout.render('mainLayout', {view: "homeLayout"});
	}
});

homeRouters.route('/auth', {
	name: 'auth',
	action(params, queryParams) {
		BlazeLayout.render('mainLayout', {view: "authLayout"});
	}
});

registrationRouters.route('/user', {
	name: 'userRegistration',
	action(params, queryParams) {
		BlazeLayout.render('mainLayout', {view: "registrationUserLayout"});
	}
});

registrationRouters.route('/service', {
	name: 'serviceRegistration',
	action(params, queryParams) {
		BlazeLayout.render('mainLayout', {view: "registrationServiceLayout"});
	}
});

FlowRouter.route('/verify-email/:token', {
	name: 'verify-email',
	action(params, queryParams) {
		Accounts.verifyEmail(params.token, (err) => {
			if(err) {
				console.warn('Verify-error', err);
			} else {
				FlowRouter.go('/');
			}
		});
	}
});

FlowRouter.notFound = {
	action() {
		BlazeLayout.render('mainLayout', {view: 'notFound'});
	}
}