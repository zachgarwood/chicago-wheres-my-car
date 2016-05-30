import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import Ember from 'ember';

export default Model.extend({
  color: attr('color'),
  make: attr('make'),
  plate: attr(),
  state: attr(),
  style: attr('style'),

  description: Ember.computed('color', 'make', 'style', function() {
    return [ this.get('color'), this.get('make'), this.get('style') ].join(' ');
  }),
  licensePlate: Ember.computed('state', 'plate', function() {
    return [ this.get('state'), this.get('plate') ].join(' ');
  }),
});
