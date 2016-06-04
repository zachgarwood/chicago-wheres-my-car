import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.peekRecord(
      'relocated-vehicle',
      params.relocated_vehicle_id
    );
  },
});
