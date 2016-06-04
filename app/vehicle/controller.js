import Ember from 'ember';
import moment from 'moment';
import COLOR_CODES from '../color/codes';

export default Ember.Controller.extend({
  queryParams: [ 'color', 'last_seen', 'make' ],
  last_seen: moment().subtract(1, 'days').startOf('day').toISOString(), 
  color: null,
  make: null,

  sortedVehicles: Ember.computed.sort('model', 'sortDefinition'),
  sortDefinition: ['date:desc'],

  today: moment().startOf('day').toISOString(),
  yesterday: moment().subtract(1, 'days').startOf('day').toISOString(), 
  daysAgo: moment().subtract(6, 'days').startOf('day').toISOString(), 
  weeksAgo: moment().subtract(4, 'weeks').startOf('week').toISOString(),
  monthsAgo: moment().subtract(2, 'months').startOf('month').toISOString(),
  aLongTimeAgo: moment().subtract(1, 'years').startOf('year').toISOString(),

  colorCodes: Ember.computed(function() {
    let keys = Object.keys(COLOR_CODES);
    let codes = [];
    keys.forEach(function(key) {
      codes.push({ 'code': key, 'label': COLOR_CODES[key] }); 
    });
    return codes;
  }),
});
