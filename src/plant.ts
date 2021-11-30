import * as ex from "excalibur";
import { Resources } from "./resources";
import Config from "./config";

export class Plant extends ex.Actor{
    constructor(private x: number){
        super({
            height: Config.GameHeight,
            width: 177,
            pos: new ex.Vector(x, Config.GameHeight/2 + 20)
        })
    }
    onInitialize(engine: ex.Engine){
        const plant = Resources.plant;
        this.addDrawing(plant);
    }
}