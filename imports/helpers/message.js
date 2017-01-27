import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import MESSAGES from '../libs/messages.json';

Template.registerHelper('message', (value) => {
  return MESSAGES[value] ? MESSAGES[value] : null;
});