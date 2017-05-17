import { test } from 'qunit';
import moduleForAcceptance from 'chicago-wheres-my-car/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | vehicle details links');

test('visiting /vehicle-details-links', function(assert) {
  visit('/vehicle-details-links');

  andThen(function() {
    assert.equal(currentURL(), '/vehicle-details-links');
  });
});
