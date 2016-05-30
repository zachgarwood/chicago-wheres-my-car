import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      relocatedVehicles: this.store.findAll('relocated-vehicle'),
      towedVehicles: this.store.findAll('towed-vehicle'),
    }).then(function(hash) {
      let allVehicles = Ember.A();
      allVehicles.pushObjects(hash.relocatedVehicles.toArray());
      allVehicles.pushObjects(hash.towedVehicles.toArray());
      return allVehicles;
    });
  },
});
