import ApplicationSerializer from '../serializers/application';

export default ApplicationSerializer.extend({
  primaryKey: 'service_request_number',
  extractId(modelClass, resourceHash) {
    return resourceHash[this.get('primaryKey')];
  },
});
