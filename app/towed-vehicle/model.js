import Ember from 'ember';
import VehicleModel from '../vehicle/model';
import attr from 'ember-data/attr';

export default VehicleModel.extend({
  date: Ember.computed.alias('towDate'),
  towDate: attr('date'),
  towedFacilityPhone: attr(),
  towedToAddress: attr(),
});
