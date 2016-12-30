FlowRouter.route('/', {
	name: 'home',
	action(params, queryParams) {
		BlazeLayout.render('mainLayout', {view: "homeLayout"})
	}
});

// FlowRouter.route('/registration', {
// 	name: 'registration',
// 	action(params, queryParams) {
// 		BlazeLayout.render('body', {main: "registration"})
// 	}
// });

// FlowRouter.notFound = {
// 	action() {
// 		BlazeLayout.render('body', {main: 'notFound'});
// 	}
// }