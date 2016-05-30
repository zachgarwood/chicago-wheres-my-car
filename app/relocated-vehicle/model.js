import Ember from 'ember';
import VehicleModel from '../vehicle/model';
import attr from 'ember-data/attr';

export default VehicleModel.extend({
  date: Ember.computed.alias('relocatedDate'),
  relocatedFromStreetName: attr(),
  relocatedToStreetname: attr(),
  relocatedDate: attr('date'), 
});
