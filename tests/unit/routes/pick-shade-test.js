import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | pick-shade', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:pick-shade');
    assert.ok(route);
  });
});
