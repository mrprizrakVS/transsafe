FlowRouter.triggers.enter([(context, redirect) => {
}]);

const homeRouters = FlowRouter.group({
	name: 'home-abstract',
	triggersEnter: [(context) => {
	}]
});

const registrationRouters = homeRouters.group({
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

homeRouters.route('/send-verify', {
	name: 'send-verify',
	action() {
		BlazeLayout.render('mainLayout', {view: 'sendVerifyLayout'});
	}
})

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
				alert('Verify email error');
			}

			FlowRouter.go('/');
		});
	}
});

FlowRouter.notFound = {
	action() {
		BlazeLayout.render('mainLayout', {view: 'notFound'});
	}
}