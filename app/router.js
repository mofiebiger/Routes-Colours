import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  // http://localhost:4200/
  this.route("start", { path: "/"});

  // http://localhost:4200/red/orange/yellow/green/blue => gradually displays
  this.route("red", function() {
    this.route("orange", function() {
      this.route("yellow", function() {
        this.route("green", function() {
          this.route("blue");
        });
      });
    });
  });

  // http://localhost:4200/rainbow/red/orange/yellow/green/blue => displays all at once
  this.route("rainbow", function() {
    this.route("red", function() {
      this.route("orange", function() {
        this.route("yellow", function() {
          this.route("green", function() {
            this.route("blue");
          });
        });
      });
    });
  });

  // http://localhost:4200/pick => // http://localhost:4200/pick/colour-one/colour-two/colour-three/colour-four/colour-five
  this.route('pick');
  this.route("colour-one", { path: "/pick/:colour_one" }, function() {
    this.route("colour-two", { path: "/:colour_two" }, function() {
      this.route("colour-three", { path: "/:colour_three" }, function() {
        this.route("colour-four", { path: "/:colour_four" }, function() {
          this.route("colour-five", { path: "/:colour_five" });
        });
      });
    });
  });

  // http://localhost:4200/pick-shade => // http://localhost:4200/pick-shade/colour/shade-id
  this.route('pick-shade');
  this.route("shades", { path: "/colour/:colour" }, function() {
    this.route("shade", { path: "/shade/:shade_id"});
  });
});
