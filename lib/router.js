const registrationRouters = FlowRouter.group({
	prefix: '/registration',
	name: 'registration',
	triggerEnter: [(context, redirect) => {
		console.log('start registration');
	}]
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

FlowRouter.notFound = {
	action() {
		console.log('Not found...');
		BlazeLayout.render('mainLayout', {view: 'notFound'});
	}
}