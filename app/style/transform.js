import Transform from 'ember-data/transform';
import _object from 'lodash/object';

// Source:
// http://www.txdmv.gov/publications/doc_download/917-vtr-249-standard-abbreviations-for-vehicle-makes-and-body-styles
const STYLE_CODES = {
  '2D': '2-door sedan',
  '2H': '2-door hatchback',
  '2T': '2-door hardtop',
  '4D': '4-door sedan',
  '4H': '4-door hatchback',
  '4T': '4-door hardtop',
  'AM': 'ambulance',
  'AR': 'armored',
  'BT': 'boat',
  'BU': 'bus',
  'CP': 'coupe',
  'CT': 'camping trailer',
  'CV': 'convertible',
  'FB': 'flatbed',
  'GC': 'golf cart',
  'HB': 'hatchback',
  'HR': 'hearse',
  'HT': 'hardtop',
  'LL': 'suv',
  'LM': 'limousine',
  'MC': 'motorcycle',
  'MD': 'moped',
  'MH': 'motor home',
  'MS': 'motor scooter',
  'MV': 'atv',
  'PK': 'pickup',
  'SD': 'notchback',
  'SW': 'station wagon',
  'VC': 'van camper',
  'VN': 'van',
};

export default Transform.extend({
  deserialize(serialized) {
    return (serialized in STYLE_CODES) ? STYLE_CODES[serialized] : serialized;
  },

  serialize(deserialized) {
    return _object.findKey(STYLE_CODES, deserialized);
  }
});
