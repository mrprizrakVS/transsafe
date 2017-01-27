import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';


import './messageStateLayout.html';

Template.messageStateLayout.helpers({
  value() {
    return FlowRouter.getParam('constant');
  }
});