import { Resource, Texture } from "excalibur";
import goldfishLeft from "./images/goldfish-left.png"
import goldfishRight from "./images/goldfish-right.png"

let Resources = {
  goldfishLeft: new Texture(goldfishLeft),
  goldfishRight: new Texture(goldfishRight),
};

export { Resources };
