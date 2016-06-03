import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    color: { refreshModel: true },
    last_seen: { refreshModel: true },
    make: { refreshModel: true },
  },
  model(params) {
    let query = {
      where: [ `relocated_date > "${params.last_seen}"` ],
      order: [ 'relocated_date desc' ],
    };
    if (params.color) {
      query.where.push('color = "' + params.color + '"');
    }
    if (params.make) {
      query.where.push('make = "' + params.make + '"');
    }
    return Ember.RSVP.hash({
      relocatedVehicles: this.store.query('relocated-vehicle', query),
      towedVehicles: [], //this.store.findAll('towed-vehicle'),
    }).then(function(hash) {
      let allVehicles = Ember.A();
      allVehicles.pushObjects(hash.relocatedVehicles.toArray());
      allVehicles.pushObjects(hash.towedVehicles.toArray());
      return allVehicles;
    });
  },
});
