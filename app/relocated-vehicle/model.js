import Ember from 'ember';
import VehicleModel from '../vehicle/model';
import attr from 'ember-data/attr';

export default VehicleModel.extend({
  date: Ember.computed.alias('relocatedDate'),
  relocatedDate: attr('date'),

  relocatedReason: attr(),

  relocatedFromAddressNumber: attr('number'),
  relocatedFromStreetDirection: attr(),
  relocatedFromStreetName: attr(),
  relocatedFromSuffix: attr(),
  relocatedFrom: Ember.computed(
    'relocatedFromAddressNumber',
    'relocatedFromStreetDirection',
    'relocatedFromStreetName',
    'relocatedFromSuffix',
    function() {
      let address = [
        this.get('relocatedFromAddressNumber'),
        this.get('relocatedFromStreetDirection'),
        this.get('relocatedFromStreetName'),
        this.get('relocatedFromSuffix'),
      ];
      return address.join(' ').trim();
    }
  ),

  relocatedToAddressNumber: attr('number'),
  relocatedToDirection: attr(),
  relocatedToStreetName: attr(),
  relocatedToSuffix: attr(),
  relocatedTo: Ember.computed(
    'relocatedToAddressNumber',
    'relocatedToDirection',
    'relocatedToStreetName',
    'relocatedToSuffix',
    function() {
      let address = [
        this.get('relocatedToAddressNumber'),
        this.get('relocatedToDirection'),
        this.get('relocatedToStreetName'),
        this.get('relocatedToSuffix'),
      ];
      return address.join(' ').trim();
    }
  ),
});
