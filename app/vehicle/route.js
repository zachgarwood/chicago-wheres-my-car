import COLOR_CODES from '../color/codes';
import MAKE_CODES from '../make/codes';
import Ember from 'ember';

String.prototype.ucwords = function() {
    let str = this.toLowerCase();
    return str.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g,
      function(s){
        return s.toUpperCase();
      });
};

export default Ember.Route.extend({
  queryParams: {
    color: { refreshModel: true },
    last_seen: { refreshModel: true },
    make: { refreshModel: true },
  },
  model(params) {
    let relocatedVehicleQuery = {
      where: [ `relocated_date >= "${params.last_seen}"` ],
    };
    let towedVehicleQuery = {
      where: [ `tow_date >= "${params.last_seen}"` ],
    };
    if (params.color) {
      let color = (params.color in COLOR_CODES) ?  COLOR_CODES[params.color] : params.color;
      relocatedVehicleQuery.where.push('color = "' + color.ucwords() + '"');
      towedVehicleQuery.where.push('color = "' + params.color + '"');
    }
    if (params.make) {
      let make = (params.make in MAKE_CODES) ? MAKE_CODES[params.make] : params.make;
      relocatedVehicleQuery.where.push('make = "' + make + '"');
      towedVehicleQuery.where.push('make = "' + params.make + '"');
    }
    return Ember.RSVP.hash({
      relocatedVehicles: this.store.query('relocated-vehicle', relocatedVehicleQuery),
      towedVehicles: this.store.query('towed-vehicle', towedVehicleQuery),
    }).then(function(hash) {
      let allVehicles = Ember.A();
      allVehicles.pushObjects(hash.relocatedVehicles.toArray());
      allVehicles.pushObjects(hash.towedVehicles.toArray());
      return allVehicles;
    });
  },
});
