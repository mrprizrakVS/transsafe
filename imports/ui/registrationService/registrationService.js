import { Template } from 'meteor/templating';
import { HTTP } from 'meteor/http'
import { ServiceSchema } from '../../schemas/serviceSchema.js';

import './registrationServiceLayout.html';

Template.registrationServiceLayout.helpers({
	ServiceSchema
});