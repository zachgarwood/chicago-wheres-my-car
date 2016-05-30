import { moduleForModel, test } from 'ember-qunit';

moduleForModel('towed-vehicle', 'Unit | Serializer | towed-vehicle', {
  // Specify the other units that are required for this test.
  needs: ['serializer:towed-vehicle', 'transform:color', 'transform:make', 'transform:style']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
