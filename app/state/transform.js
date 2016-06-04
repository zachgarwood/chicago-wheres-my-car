import STATE_CODES from './codes';
import Transform from 'ember-data/transform';
import _object from 'lodash/object';

export default Transform.extend({
  deserialize(serialized) {
    let stateValues = _object.invert(STATE_CODES);
    return (serialized in stateValues) ? stateValues[serialized] : serialized;
  },

  serialize(deserialized) {
    return (deserialized in STATE_CODES) ? STATE_CODES[deserialized] : deserialized;
  }
});
