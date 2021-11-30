import { Resource, Texture } from "excalibur";
import goldfishLeft from "./images/goldfish-left.png";
import goldfishRight from "./images/goldfish-right.png";
import plant from "./images/plant.png";


let Resources = {
  goldfishLeft: new Texture(goldfishLeft),
  goldfishRight: new Texture(goldfishRight),
  plant: new Texture(plant),
};

export { Resources };
