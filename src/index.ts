import { Color, Engine, Loader } from "excalibur";
import { Goldfish } from "./goldfish";
import { Resources } from "./resources";
import Config from "./config";
import { Plant } from "./plant";

class Game extends Engine {
  constructor(){
    super({
      width: Config.GameWidth,
      height: Config.GameHeight,
      canvasElementId: 'game',
      backgroundColor: new Color(64, 201,222, 0.5)
    })
  }
  initialize() {
    const plant = new Plant(200);
    const goldfish = new Goldfish();
    this.add(goldfish);
    this.add(plant);
    const loader = new Loader();
    loader.addResource(Resources.goldfishLeft);
    loader.addResource(Resources.goldfishRight);
    loader.addResource(Resources.plant);
    this.start(loader);
  }
}

export const game = new Game();

game.initialize();
