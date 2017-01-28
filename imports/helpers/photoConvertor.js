import { Template } from 'meteor/templating';

Template.registerHelper('photoConvertor', (path) => {
  return path ? Meteor.settings.public.PHOTO_PATH.concat(path.split('/').slice(3).join('/')) : null;
});