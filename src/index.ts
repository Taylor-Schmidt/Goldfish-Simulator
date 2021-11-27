import { Engine, Loader } from "excalibur";
import { Goldfish } from "./goldfish";
import { Resources } from "./resources";

class Game extends Engine {
  constructor(){
    super({
      width: 800,
      height: 600,
    })
  }
  initialize() {
    const goldfish = new Goldfish();
    this.add(goldfish);
    const loader = new Loader();
    loader.addResource(Resources.Goldfish);
    this.start(loader);
  }
}

export const game = new Game();

game.initialize();
