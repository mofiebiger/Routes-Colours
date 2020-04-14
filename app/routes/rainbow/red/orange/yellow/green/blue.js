import Route from '@ember/routing/route';

export default class RainbowRedOrangeYellowGreenBlueRoute extends Route {
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
