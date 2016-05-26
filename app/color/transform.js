import Transform from 'ember-data/transform';
import _object from 'lodash/object';

// Source:
// http://www.dmv.state.va.us/webdoc/pdf/vsa-6color.pdf
const COLOR_CODES = {
  'BGE': 'beige',
  'BLK': 'black',
  'BLU': 'blue',
  'BRO': 'brown',
  'BRZ': 'bronze',
  'CAM': 'camouflage',
  'COM': 'chrome',
  'CPR': 'copper',
  'CRM': 'cream',
  'DBL': 'dark blue',
  'DGR': 'dark green',
  'GLD': 'gold',
  'GRN': 'green',
  'GRY': 'grey',
  'LBL': 'light blue',
  'LGR': 'light green',
  'MAR': 'maroon',
  'ONG': 'orange',
  'PLE': 'purple',
  'PNK': 'pink',
  'RED': 'red',
  'SIL': 'silver',
  'TAN': 'tan',
  'TEA': 'teal',
  'TPE': 'taupe',
  'TRQ': 'turquoise',
  'WHI': 'white',
  'YEL': 'yellow',
};

export default Transform.extend({
  deserialize(serialized) {
    return (serialized in COLOR_CODES) ?  COLOR_CODES[serialized] : serialized;
  },

  serialize(deserialized) {
    return _object.findKey(COLOR_CODES, deserialized);
  }
});
