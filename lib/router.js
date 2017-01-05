FlowRouter.triggers.enter([function(context, redirect) {
}]);

const registrationRouters = FlowRouter.group({
	prefix: '/registration',
	name: 'registration'
});

FlowRouter.route('/', {
	name: 'home',
	action(params, queryParams) {
		BlazeLayout.render('mainLayout', {view: "homeLayout"});
	}
});

FlowRouter.route('/auth', {
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

FlowRouter.route('/verify-email/:token?', {
	name: 'verify-email',
	action(params, queryParams) {
		if(params.token) {
			Accounts.verifyEmail(params.token, (err) => {
				if(err) {
					BlazeLayout.render('mainLayout', {view: "verifyEmailLayout"});
				} else {
					FlowRouter.go('/');
				}
			});
		} else {
			FlowRouter.go('/');
		}
	}
});

FlowRouter.notFound = {
	action() {
		console.log('Not found...');
		BlazeLayout.render('mainLayout', {view: 'notFound'});
	}
}