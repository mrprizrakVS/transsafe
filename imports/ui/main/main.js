import { Template } from 'meteor/templating';

import './mainLayout.html';

Template.mainLayout.events({
	'click #logout-btn'(ev) {
		ev.preventDefault();

		Meteor.logout();
	}
});

// HTTP.call('POST', '162.247.153.134/api/register', {
// 	data: {
// 		email: 'some@gmail.com',
// 		password: '2525252',
// 		phone: '+380679823532',
// 		firstname: 'Yura',
// 		lastname: 'Yura'
// 	}
// }, (err, data) => {
// 	debugger;
// });