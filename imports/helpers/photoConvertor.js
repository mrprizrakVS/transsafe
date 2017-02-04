import { Template } from 'meteor/templating';

Template.registerHelper('photoConvertor', (path = Meteor.settings.public.DEFAULT_PROFILE_PHOTO) => {
  console.log('path', path);
  return path ? Meteor.settings.public.PHOTO_PATH.concat(path.split('/').slice(3).join('/')) : null;
});