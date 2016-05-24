import ApplicationSerializer from '../serializers/application';

export default ApplicationSerializer.extend({
  primaryKey: 'inventory_number',
  extractId(modelClass, resourceHash) {
    return resourceHash[this.get('primaryKey')];
  },
});
