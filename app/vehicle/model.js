import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  color: attr('color'),
  make: attr('make'),
  plate: attr(),
  state: attr(),
  style: attr('style'),
  towDate: attr('date'),
  towedFacilityPhone: attr(),
  towedToAddress: attr(),
});
