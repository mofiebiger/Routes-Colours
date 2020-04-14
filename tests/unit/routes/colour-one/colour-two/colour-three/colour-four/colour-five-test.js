import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | colour-one/colour-two/colour-three/colour-four/colour-five', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:colour-one/colour-two/colour-three/colour-four/colour-five');
    assert.ok(route);
  });
});
