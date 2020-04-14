import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | red/orange/yellow', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:red/orange/yellow');
    assert.ok(route);
  });
});
