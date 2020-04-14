import Route from '@ember/routing/route';

export default class RedRoute extends Route {
  model() {
    return [
      { colour: 'red' },
      { colour: 'orange' },
      { colour: 'yellow' },
      { colour: 'green' },
      { colour: 'blue' }
    ];
  }
}
