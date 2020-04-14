import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | shades/shade', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:shades/shade');
    assert.ok(route);
  });
});
