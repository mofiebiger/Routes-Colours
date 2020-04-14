import Route from '@ember/routing/route';

export default class ShadeRoute extends Route {
  model(params) {
    let data = [
      { colour: 'Red',
        shades: ['Rust', 'Rocket', 'Ruby']
      },
      { colour: 'Orange',
        shades: ['Jasper', 'Carrot', 'Gold']
      },
      { colour: 'Yellow',
        shades: ['Sun', 'Butterscotch', 'Sandstorm']
      },
      { colour: 'Green',
        shades: ['Mint', 'Lime', 'Emerald']
      },
      { colour: 'Blue',
        shades: ['Sky', 'Ocean', 'Navy']
      }
    ];

    for(let i = 0; i < data.length; i++){
      if(data[i].colour.includes(params.colour)){

        return data[i];
      }
    }
  }
}
