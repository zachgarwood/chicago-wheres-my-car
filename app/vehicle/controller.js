import Ember from 'ember';

export default Ember.Controller.extend({
  sortedVehicles: Ember.computed.sort('model', 'sortDefinition'),
  sortDefinition: ['date:desc', 'licensePlate'],
});
