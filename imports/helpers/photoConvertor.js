import { Template } from 'meteor/templating';

Template.registerHelper('photoConvertor', (inputPath, type) => {
  let path = inputPath;

  if(type !== 'banner' && !path) {
    path = Meteor.settings.public.DEFAULT_PROFILE_PHOTO
  }

  return path ? Meteor.settings.public.PHOTO_PATH.concat(path.split('/').slice(3).join('/')) : null;
});