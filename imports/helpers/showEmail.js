import { Template } from 'meteor/templating';

Template.registerHelper('showEmail', (user) => {
  return user ? user.emails[0].address : null;
});