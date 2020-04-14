import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | orange/yellow', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:orange/yellow');
    assert.ok(route);
  });
});
