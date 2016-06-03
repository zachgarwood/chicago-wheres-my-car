import { moduleForModel, test } from 'ember-qunit';

moduleForModel('relocated-vehicle', 'Unit | Serializer | relocated vehicle', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:relocated-vehicle',
    'transform:color',
    'transform:make',
    'transform:state',
    'transform:style',
  ]
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
