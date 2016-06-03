import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  queryParams: [ 'color', 'last_seen', 'make' ],
  last_seen: moment().subtract(1, 'days').startOf('day').toISOString(), 
  color: null,
  make: null,

  today: moment().startOf('day').toISOString(),
  yesterday: moment().subtract(1, 'days').startOf('day').toISOString(), 
  daysAgo: moment().subtract(6, 'days').startOf('day').toISOString(), 
  weeksAgo: moment().subtract(4, 'weeks').startOf('week').toISOString(),
  monthsAgo: moment().subtract(2, 'months').startOf('month').toISOString(),
  aLongTimeAgo: moment().subtract(1, 'years').startOf('year').toISOString(),
});
