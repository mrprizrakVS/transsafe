FlowRouter.triggers.enter([(context, redirect) => {
}]);

const homeRouters = FlowRouter.group({
  name: 'home-abstract',
  triggersEnter: [(context, redirect) => {
    if(Meteor.user() && !Meteor.user()['emails'][0].verified) {
      redirect('/message/confirm-email');
    }
  }]
});

const registrationRouters = homeRouters.group({
  prefix: '/registration',
  name: 'registration'
});

homeRouters.route('/', {
  name: 'home',
  action(params, queryParams) {
    BlazeLayout.render('mainLayout', {view: 'homeLayout'});
  }
});

homeRouters.route('/auth', {
  name: 'auth',
  action(params, queryParams) {
    BlazeLayout.render('mainLayout', {view: 'authLayout'});
  }
});

homeRouters.route('/user/profile/:id', {
  name: 'user-profile',
  action(params, queryParams) {
    BlazeLayout.render('mainLayout', {view: 'userAccountLayout'});
  }
});

registrationRouters.route('/user', {
  name: 'userRegistration',
  action(params, queryParams) {
    BlazeLayout.render('mainLayout', {view: 'registrationUserLayout'});
  }
});

registrationRouters.route('/service', {
  name: 'serviceRegistration',
  action(params, queryParams) {
    BlazeLayout.render('mainLayout', {view: 'registrationServiceLayout'});
  }
});

FlowRouter.route('/send-verify', {
  name: 'send-verify',
  action() {
    BlazeLayout.render('mainLayout', {view: 'sendVerifyLayout'});
  }
});

FlowRouter.route('/verify-email/:token', {
  name: 'verify-email',
  action(params, queryParams) {
    Accounts.verifyEmail(params.token, (err) => {
      if(err) {
        console.warn('Error', err);
        alert('Verify email error');
      }

      FlowRouter.go('/');
    });
  }
});

FlowRouter.route('/message/:constant', {
  name: 'message-state',
  action(params, queryParams) {
    BlazeLayout.render('mainLayout', {view: 'messageStateLayout'});
  }
});

FlowRouter.notFound = {
  name: 'not-found',
  action() {
    BlazeLayout.render('mainLayout', {view: 'notFound'});
  }
}