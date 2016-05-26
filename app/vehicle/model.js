import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  color: attr('color'),
  make: attr('make'),
  plate: attr(),
  state: attr(),
  style: attr(),
  tow_date: attr('date'),
  towed_facility_phone: attr(),
  towed_to_address: attr(),
});
