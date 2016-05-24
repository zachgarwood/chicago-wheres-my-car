import { moduleForModel, test } from 'ember-qunit';

moduleForModel('vehicle', 'Unit | Serializer | vehicle', {
  // Specify the other units that are required for this test.
  needs: ['serializer:vehicle', 'transform:color', 'transform:make']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
