import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | colour-one/colour-two', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:colour-one/colour-two');
    assert.ok(route);
  });
});
