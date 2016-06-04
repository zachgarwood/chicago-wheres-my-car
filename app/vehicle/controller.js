import Ember from 'ember';
import moment from 'moment';
import COLOR_CODES from '../color/codes';
import MAKE_CODES from '../make/codes';
import STATE_CODES from '../state/codes';

export default Ember.Controller.extend({
  queryParams: [ 'color', 'last_seen', 'make', 'state' ],
  last_seen: moment().subtract(1, 'days').startOf('day').toISOString(),
  color: null,
  make: null,
  state: 'IL',

  sortedVehicles: Ember.computed.sort('model', 'sortDefinition'),
  sortDefinition: ['date:desc'],

  today: moment().startOf('day').toISOString(),
  yesterday: moment().subtract(1, 'day').startOf('day').toISOString(),
  daysAgo: moment().subtract(6, 'days').startOf('day').toISOString(),
  weeksAgo: moment().subtract(3, 'weeks').startOf('week').toISOString(),
  monthsAgo: moment().subtract(2, 'months').startOf('month').toISOString(),
  aLongTimeAgo: moment().subtract(1, 'years').startOf('year').toISOString(),

  colorCodes: Ember.computed(function() {
    return this.get('_convertCodesToArray')(COLOR_CODES);
  }),
  makeCodes: Ember.computed(function() {
    return this.get('_convertCodesToArray')(MAKE_CODES);
  }),
  stateCodes: Ember.computed(function() {
    return this.get('_convertCodesToArray')(STATE_CODES);
  }),
  _convertCodesToArray(codes) {
    let keys = Object.keys(codes);
    let codeArray = [];
    keys.forEach(function(key) {
      codeArray.push({ 'code': key, 'label': codes[key] });
    });
    return codeArray;
  },
});
