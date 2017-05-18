import { test } from 'qunit';
import moduleForAcceptance from 'chicago-wheres-my-car/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | vehicle details links');

test('vehicle details links', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('.vehicle-item').length, 3);

    click(find('.vehicle-item:first a'));
  });

  andThen(function() {
    assert.ok(currentURL().includes('-vehicle'));
  });
});
