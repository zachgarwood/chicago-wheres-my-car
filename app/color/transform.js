import COLOR_CODES from './codes';
import Transform from 'ember-data/transform';
import _object from 'lodash/object';

export default Transform.extend({
  deserialize(serialized) {
    return (serialized in COLOR_CODES) ?  COLOR_CODES[serialized] : serialized;
  },

  serialize(deserialized) {
    return _object.findKey(COLOR_CODES, deserialized);
  }
});
