import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('vehicle', { path: '/' });
  this.route(
    'relocated-vehicle',
    { path: 'relocated-vehicle/:relocated_vehicle_id' }
  );
  this.route(
    'towed-vehicle',
    { path: 'towed-vehicle/:towed_vehicle_id' }
  );
});

export default Router;
