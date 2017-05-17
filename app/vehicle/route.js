import Ember from 'ember';
import COLOR_CODES from '../color/codes';
import MAKE_CODES from '../make/codes';
import STATE_CODES from '../state/codes';

String.prototype.ucwords = function() {
    let str = this.toLowerCase();
    return str.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g, function(s) {
      return s.toUpperCase();
    });
};

export default Ember.Route.extend({
  queryParams: {
    color: { refreshModel: true },
    last_seen: { refreshModel: true },
    make: { refreshModel: true },
    state: { refreshModel: true },
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
    if (params.state) {
      let state = (params.state in STATE_CODES) ? STATE_CODES[params.state] : params.state;
      relocatedVehicleQuery.where.push('state = "' + state + '"');
      towedVehicleQuery.where.push('state = "' + params.state + '"');
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
