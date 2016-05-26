import Transform from 'ember-data/transform';
import _object from 'lodash/object';

// Sources:
// https://dps.mn.gov/divisions/sfm/programs-services/Documents/Juvenile%20FireSetter%20Program/VehicleMake.PDF
// http://mmucc.us/ncic-codes-motor-vehicle-makes
// http://www.txdmv.gov/publications/doc_download/917-vtr-249-standard-abbreviations-for-vehicle-makes-and-body-styles
const MAKE_CODES = {
  'ACUR': "Acura",
  'AUDI': "Audi",
  'BMW': "BMW",
  'BUIC': "Buick",
  'CADI': "Cadillac",
  'CAT': "Caterpillar Tractor Co.",
  'CDR': "Carver Boat Corp.",
  'CHEV': "Chevrolet",
  'CHRY': "Chrysler",
  'DMR': "Donzi Marine, Inc.",
  'DODG': "Dodge",
  'DUCA': "Ducati",
  'FERR': "Ferrari",
  'FORD': "Ford",
  'FRHT': "Freightliner",
  'GMC': "GMC",
  'HD': "Harley-Davidson",
  'HOND': "Honda",
  'HUMM': "Hummer",
  'HYUN': "Hyundai",
  'INDI': "Indian Motorcycle Co.",
  'INTL': "International Truck & Engine Corp.",
  'INTT': "Interstate Trailers, Inc.",
  'ISU': "Isuzu",
  'ITST': "Interstate Trailers, Inc.",
  'JAGU': "Jaguar",
  'JEEP': "Jeep",
  'JEP': "Jeep",
  'KAWK': "Kawasaki",
  'KIA': "Kia",
  'KW': "Kenworth",
  'LAMO': "Lamborghini",
  'LEXS': "Lexus",
  'LINC': "Lincoln",
  'LNDR': "Land Rover",
  'LOTU': "Lotus",
  'LOWB': "LowBoy Trailer",
  'LWLF': "Lone Wolf Trailer Co., Inc.",
  'MACK': "Mack",
  'MAZD': "Mazda",
  'MERC': "Mercury",
  'MERZ': "Mercedes-Benz",
  'MITS': "Mitsubishi",
  'MNNI': "Mini or Mini Cooper",
  'NISS': "Nissan",
  'OLDS': "Oldsmobile",
  'PEUG': "Peugeot",
  'PLYM': "Plymouth",
  'PONT': "Pontiac",
  'PORS': "Porsche",
  'PTRB': "Peterbilt Motors Co.",
  'RNK': "Rinker Boat Co., Inc.",
  'ROV': "Rover",
  'SAA': "Saab",
  'SCIO': "Scion",
  'SMRT': "Smart Car",
  'SPYD': "Spyder",
  'STRN': "Saturn",
  'SUBA': "Subaru",
  'SUZI': "Suzuki",
  'TOYT': "Toyota",
  'TRIU': "Triumph Motor Co.",
  'VESP': "Vespa",
  'VOLK': "Volkswagen",
  'VOLV': "Volvo",
  'YAMA': "Yamaha",
};

export default Transform.extend({
  deserialize(serialized) {
    return (serialized in MAKE_CODES) ?  MAKE_CODES[serialized] : serialized;
  },

  serialize(deserialized) {
    return _object.findKey(MAKE_CODES, deserialized);
  }
});
