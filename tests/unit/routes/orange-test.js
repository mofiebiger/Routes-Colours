import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | orange', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:orange');
    assert.ok(route);
  });
});
