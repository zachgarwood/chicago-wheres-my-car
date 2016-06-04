import MAKE_CODES from './codes';
import Transform from 'ember-data/transform';
import _object from 'lodash/object';


export default Transform.extend({
  deserialize(serialized) {
    return (serialized in MAKE_CODES) ?  MAKE_CODES[serialized] : serialized;
  },

  serialize(deserialized) {
    return _object.findKey(MAKE_CODES, deserialized);
  }
});
