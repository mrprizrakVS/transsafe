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
		BlazeLayout.render('mainLayout', {view: "homeLayout"})
	}
});

registrationRouters.route('/user', {
	name: 'userRegistration',
	action(params, queryParams) {
		console.log('user registration');
		BlazeLayout.render('mainLayout', {view: "registrationUser"})
	}
});

FlowRouter.notFound = {
	action() {
		console.log('Not found...');
		BlazeLayout.render('mainLayout', {view: 'notFound'});
	}
}